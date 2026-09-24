import React, { useState } from 'react';
import { Classroom, Task, Submission } from '../types';
import { 
  BookOpen, 
  Upload, 
  CheckCircle2, 
  FileText, 
  User, 
  School, 
  Calendar, 
  AlertCircle, 
  Sparkles, 
  ArrowLeft,
  GraduationCap,
  Clock,
  Check,
  Star,
  Trophy,
  Smartphone
} from 'lucide-react';
import { storage } from '../services/storage';
import confetti from 'canvas-confetti';

interface StudentTaskViewProps {
  tasks: Task[];
  classes: Classroom[];
  initialTaskId?: string;
  onBackToTeacher?: () => void;
  onSubmissionSuccess?: () => void;
  onOpenStudentPortal?: (studentId?: string, classId?: string) => void;
}

export const StudentTaskView: React.FC<StudentTaskViewProps> = ({
  tasks,
  classes,
  initialTaskId,
  onBackToTeacher,
  onSubmissionSuccess,
  onOpenStudentPortal,
}) => {
  const [selectedTaskId, setSelectedTaskId] = useState<string>(
    initialTaskId && tasks.some(t => t.id === initialTaskId) ? initialTaskId : tasks[0]?.id || ''
  );
  const [studentName, setStudentName] = useState<string>('');
  const [studentClass, setStudentClass] = useState<string>('10A');
  const [note, setNote] = useState<string>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSubmission, setSubmittedSubmission] = useState<Submission | null>(null);

  const classStudents = storage.getStudentsByClass(studentClass);

  const activeTask = tasks.find((t) => t.id === selectedTaskId) || tasks[0];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (evt) => {
          setFilePreview(evt.target?.result as string);
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreview(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim() || !studentClass || !selectedFile || !activeTask) return;

    setIsSubmitting(true);

    const reader = new FileReader();
    reader.onload = (evt) => {
      const dataUrl = evt.target?.result as string;
      const sizeStr = (selectedFile.size / 1024).toFixed(1) + ' KB';

      const newSubmission: Submission = {
        id: `sub-${Date.now()}`,
        taskId: activeTask.id,
        taskTitle: activeTask.title,
        studentName: studentName.trim(),
        studentClass: studentClass,
        fileName: selectedFile.name,
        fileType: selectedFile.type || 'Tài liệu',
        fileSize: sizeStr,
        fileData: dataUrl,
        submittedAt: new Date().toISOString(),
        status: 'submitted',
      };

      storage.saveSubmission(newSubmission);
      setIsSubmitting(false);
      setSubmittedSubmission(newSubmission);

      // Trigger celebratory confetti
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
      });

      if (onSubmissionSuccess) {
        onSubmissionSuccess();
      }
    };

    reader.readAsDataURL(selectedFile);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-emerald-50/20 to-teal-50/30 text-slate-800 pb-16">
      {/* Student View Banner Header */}
      <div className="bg-emerald-900 text-white shadow-md">
        <div className="max-w-4xl mx-auto px-4 py-4 sm:py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-700/80 flex items-center justify-center text-white border border-emerald-500/30">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-display font-bold text-base sm:text-lg leading-tight">
                LỚP HỌC SỐ – CÔ GIÁO NGUYỄN THỊ DUNG
              </h1>
              <p className="text-xs text-emerald-200">
                Cổng nộp bài học sinh · Không yêu cầu tài khoản
              </p>
            </div>
          </div>

          {onBackToTeacher && (
            <button
              onClick={onBackToTeacher}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-emerald-100 text-xs font-medium transition-colors cursor-pointer border border-emerald-600/40"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Giao diện Giáo viên</span>
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 pt-6">
        {/* If submission successful */}
        {submittedSubmission ? (
          <div className="bg-white rounded-3xl border border-emerald-200 p-8 sm:p-12 shadow-xl text-center max-w-xl mx-auto my-8 animate-fade-in">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 ring-8 ring-emerald-50">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              Nộp Bài Thành Công!
            </span>

            <h2 className="text-2xl font-bold font-display text-slate-900">
              Đã Gửi Bài Cho Cô Nguyễn Thị Dung
            </h2>
            <p className="text-xs text-slate-500 mt-2">
              Hệ thống đã lưu trữ bài làm an toàn và thông báo tới cô giáo.
            </p>

            {/* Receipt card */}
            <div className="bg-slate-50 rounded-2xl p-4 mt-6 text-left border border-slate-200 text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-slate-400">Học sinh:</span>
                <span className="font-bold text-slate-900">{submittedSubmission.studentName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Lớp:</span>
                <span className="font-bold text-slate-900">{submittedSubmission.studentClass}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Nhiệm vụ:</span>
                <span className="font-medium text-slate-800 text-right truncate max-w-[200px]">
                  {submittedSubmission.taskTitle}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Tệp đã nộp:</span>
                <span className="font-medium text-emerald-700">{submittedSubmission.fileName}</span>
              </div>
              <div className="flex justify-between border-t border-slate-200/80 pt-2 text-[11px]">
                <span className="text-slate-400">Thời gian nộp:</span>
                <span className="text-slate-600">
                  {new Date(submittedSubmission.submittedAt).toLocaleString('vi-VN')}
                </span>
              </div>
            </div>

            {/* Student Account Score Feedback */}
            {(() => {
              const matchedStudent = storage.getStudentByCodeOrName(submittedSubmission.studentClass, submittedSubmission.studentName);
              return (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 mt-4 text-left space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 font-bold text-xs uppercase tracking-wide">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>+10 Điểm Chuyên Cần Đã Tự Động Cộng Vào Tài Khoản!</span>
                  </div>
                  <div className="text-xs text-slate-700 flex justify-between items-center">
                    <span>Mã tài khoản học sinh:</span>
                    <span className="font-mono font-bold text-slate-900">{matchedStudent?.studentCode || 'HS-SO'}</span>
                  </div>
                  <div className="text-xs text-slate-700 flex justify-between items-center">
                    <span>Tổng điểm tích lũy mới:</span>
                    <span className="font-extrabold text-emerald-700 text-sm">
                      {matchedStudent?.totalScore || 10} điểm (Hạng #{matchedStudent?.rankInClass || 1} lớp {submittedSubmission.studentClass})
                    </span>
                  </div>
                </div>
              );
            })()}

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => {
                  setSubmittedSubmission(null);
                  setSelectedFile(null);
                  setFilePreview(null);
                }}
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer"
              >
                Nộp Thêm Bài Khác
              </button>

              {onOpenStudentPortal && (
                <button
                  onClick={() => {
                    const matched = storage.getStudentByCodeOrName(submittedSubmission.studentClass, submittedSubmission.studentName);
                    onOpenStudentPortal(matched?.id, submittedSubmission.studentClass);
                  }}
                  className="w-full sm:w-auto px-5 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-xl text-xs font-bold shadow-md transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Trophy className="w-4 h-4 text-amber-300" />
                  <span>Xem Sổ Điểm & Tài Khoản Của Em</span>
                </button>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Task details for student */}
            <div className="lg:col-span-7 space-y-6">
              {/* Task Selector if multiple tasks available */}
              {tasks.length > 1 && (
                <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
                  <label className="block text-xs font-bold text-slate-700 mb-2">
                    Chọn nhiệm vụ cần nộp:
                  </label>
                  <select
                    value={activeTask?.id}
                    onChange={(e) => setSelectedTaskId(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl bg-white font-medium focus:ring-2 focus:ring-emerald-500 outline-hidden"
                  >
                    {tasks.map((t) => (
                      <option key={t.id} value={t.id}>
                        [{t.grade}] {t.title} ({t.classIds.join(', ')})
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Active Task Details */}
              {activeTask && (
                <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs space-y-5">
                  <div>
                    <div className="flex items-center gap-2 text-xs mb-1">
                      <span className="font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-md border border-emerald-200">
                        {activeTask.grade}
                      </span>
                      <span className="text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-medium">
                        Lớp: {activeTask.classIds.join(', ')}
                      </span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500">{activeTask.subject}</span>
                    </div>

                    <h2 className="text-xl sm:text-2xl font-bold font-display text-slate-900 mt-2 leading-tight">
                      {activeTask.title}
                    </h2>

                    {activeTask.lessonTopic && (
                      <p className="text-xs text-slate-500 mt-1 font-medium">
                        Bài học: {activeTask.lessonTopic}
                      </p>
                    )}
                  </div>

                  {/* Deadline box */}
                  <div className="p-3.5 bg-amber-50/80 border border-amber-200/80 rounded-2xl flex items-center gap-3 text-xs text-amber-900">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                    <div>
                      <span className="font-bold">Hạn chót nộp bài: </span>
                      <span>
                        {activeTask.deadline ? new Date(activeTask.deadline).toLocaleString('vi-VN') : 'Không giới hạn thời gian'}
                      </span>
                    </div>
                  </div>

                  {/* Requirements */}
                  <div>
                    <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5 flex items-center gap-1.5">
                      <BookOpen className="w-4 h-4 text-emerald-600" />
                      <span>Yêu cầu nhiệm vụ:</span>
                    </h3>
                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200/80 text-xs text-slate-700 leading-relaxed whitespace-pre-line">
                      {activeTask.requirements || activeTask.objective}
                    </div>
                  </div>

                  {/* Instructions */}
                  {activeTask.instructions && (
                    <div>
                      <h3 className="text-xs font-bold text-slate-800 uppercase tracking-wide mb-1.5">
                        Hướng dẫn làm bài & nộp bài:
                      </h3>
                      <div className="text-xs text-slate-600 leading-relaxed whitespace-pre-line p-3 bg-slate-50/60 rounded-xl border border-slate-100">
                        {activeTask.instructions}
                      </div>
                    </div>
                  )}

                  {/* Allowed formats */}
                  <div>
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wide block mb-1">
                      Định dạng bài được chấp nhận:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {activeTask.allowedFileTypes.map((ft) => (
                        <span key={ft} className="px-2.5 py-1 bg-slate-100 text-slate-700 text-[11px] font-semibold rounded-lg">
                          ✓ {ft.toUpperCase()}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Teacher's Note */}
                  {activeTask.teacherNote && (
                    <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-100 text-xs text-emerald-800">
                      <strong>Lời dặn của Cô Dung: </strong>
                      {activeTask.teacherNote}
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Right Column: Submission Form (No login needed!) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-lg sticky top-6">
                <div className="mb-5 pb-4 border-b border-slate-100">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>NỘP BÀI NHANH</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-slate-900">
                    Thông Tin & Tải Bài Nộp
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Chỉ cần nhập Họ tên và Lớp, không cần tài khoản hay mật khẩu.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Student Full Name */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Họ và tên học sinh <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <input
                        type="text"
                        required
                        list="task-student-names"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        placeholder="VD: Nguyễn Văn A (hoặc chọn tên trong danh sách)"
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-hidden font-medium"
                      />
                      <datalist id="task-student-names">
                        {classStudents.map((s) => (
                          <option key={s.id} value={s.name}>
                            {s.studentCode ? `${s.studentCode} - ${s.name}` : s.name}
                          </option>
                        ))}
                      </datalist>
                    </div>
                  </div>

                  {/* Student Class */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Lớp học <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <School className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                      <select
                        required
                        value={studentClass}
                        onChange={(e) => setStudentClass(e.target.value)}
                        className="w-full pl-9 pr-3 py-2 text-xs border border-slate-300 rounded-xl bg-white focus:ring-2 focus:ring-emerald-500 outline-hidden font-medium"
                      >
                        {classes.map((c) => (
                          <option key={c.id} value={c.id}>
                            Lớp {c.id} ({c.name})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Matched Student Account Live Status */}
                  {(() => {
                    const matchedInForm = classStudents.find(
                      (s) => s.name.toLowerCase().trim() === studentName.toLowerCase().trim()
                    );
                    if (!matchedInForm) return null;
                    return (
                      <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1 animate-fade-in">
                        <div className="flex items-center justify-between font-bold text-emerald-900">
                          <div className="flex items-center gap-1.5">
                            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                            <span>Tài khoản: {matchedInForm.name}</span>
                          </div>
                          <span className="text-[11px] bg-emerald-200/60 text-emerald-800 px-2 py-0.5 rounded-full font-mono">
                            {matchedInForm.studentCode || 'HS-SO'}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-emerald-700">
                          <span>Điểm hiện tại: <strong>{matchedInForm.totalScore || 0}đ</strong> (Hạng #{matchedInForm.rankInClass || 1})</span>
                          <span className="font-semibold text-emerald-800">+10đ chuyên cần</span>
                        </div>
                      </div>
                    );
                  })()}

                  {/* File Upload Box */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Chọn tệp bài làm <span className="text-rose-500">*</span>
                    </label>
                    <label className="border-2 border-dashed border-slate-300 hover:border-emerald-500 bg-slate-50/50 hover:bg-emerald-50/30 rounded-2xl p-5 flex flex-col items-center justify-center text-center cursor-pointer transition-colors block">
                      <Upload className="w-8 h-8 text-emerald-600 mb-2" />
                      <span className="text-xs font-bold text-slate-700">
                        {selectedFile ? selectedFile.name : 'Bấm để chọn tệp hoặc kéo thả vào đây'}
                      </span>
                      <span className="text-[11px] text-slate-400 mt-1">
                        {selectedFile
                          ? `${(selectedFile.size / 1024).toFixed(1)} KB`
                          : 'Word (.docx), PDF, PowerPoint, Ảnh (JPG, PNG)'}
                      </span>
                      <input
                        type="file"
                        required
                        onChange={handleFileChange}
                        className="hidden"
                      />
                    </label>

                    {filePreview && (
                      <div className="mt-2 p-2 bg-slate-50 rounded-xl border border-slate-200">
                        <img
                          src={filePreview}
                          alt="Xem trước ảnh"
                          className="max-h-32 mx-auto rounded-lg object-contain"
                        />
                      </div>
                    )}
                  </div>

                  {/* Student Note */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Ghi chú thêm gửi cô (tùy chọn)
                    </label>
                    <input
                      type="text"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="VD: Em đã hoàn thành phần vẽ sơ đồ tư duy..."
                      className="w-full px-3 py-2 text-xs border border-slate-300 rounded-xl focus:ring-2 focus:ring-emerald-500 outline-hidden"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedFile || !studentName.trim()}
                      className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer hover:shadow-lg"
                    >
                      {isSubmitting ? (
                        <span>Đang tải bài nộp lên...</span>
                      ) : (
                        <>
                          <Check className="w-4 h-4" />
                          <span>HOÀN THÀNH & NỘP BÀI</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
