import { Classroom, Student, Task, Submission, Game, GameResult, NotificationItem } from '../types';

const STORAGE_KEYS = {
  CLASSES: 'lop_hoc_so_classes',
  STUDENTS: 'lop_hoc_so_students',
  TASKS: 'lop_hoc_so_tasks',
  SUBMISSIONS: 'lop_hoc_so_submissions',
  GAMES: 'lop_hoc_so_games',
  GAME_RESULTS: 'lop_hoc_so_game_results',
  NOTIFICATIONS: 'lop_hoc_so_notifications',
};

// Initial default classes for Cô giáo Nguyễn Thị Dung
const DEFAULT_CLASSES: Classroom[] = [
  {
    id: '10A',
    name: 'Lớp 10A',
    grade: '10',
    studentCount: 42,
    subject: 'Sinh học & KHTN',
    description: 'Lớp chọn tự nhiên khối 10 - Năm học 2025 - 2026',
    colorTheme: 'emerald',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: '10B',
    name: 'Lớp 10B',
    grade: '10',
    studentCount: 40,
    subject: 'Sinh học & KHTN',
    description: 'Lớp cơ bản tự nhiên khối 10',
    colorTheme: 'blue',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: '11A',
    name: 'Lớp 11A',
    grade: '11',
    studentCount: 38,
    subject: 'Sinh học 11',
    description: 'Lớp định hướng chuyên đề Y Dược & Nông nghiệp',
    colorTheme: 'indigo',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: '11B',
    name: 'Lớp 11B',
    grade: '11',
    studentCount: 39,
    subject: 'Sinh học 11',
    description: 'Lớp chuyên cần tự nhiên khối 11',
    colorTheme: 'violet',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: '12A',
    name: 'Lớp 12A',
    grade: '12',
    studentCount: 45,
    subject: 'Sinh học 12',
    description: 'Lớp luyện thi tốt nghiệp THPT & Đánh giá năng lực',
    colorTheme: 'rose',
    createdAt: '2026-09-01T08:00:00Z',
  },
  {
    id: '12B',
    name: 'Lớp 12B',
    grade: '12',
    studentCount: 43,
    subject: 'Sinh học 12',
    description: 'Lớp trọng điểm khối 12 THPT',
    colorTheme: 'amber',
    createdAt: '2026-09-01T08:00:00Z',
  },
];

// Initial default students
const DEFAULT_STUDENTS: Student[] = [
  // 10A
  { id: 'stu-10a-01', studentCode: 'HS10A01', name: 'Nguyễn Văn A', classId: '10A', gender: 'Nam', birthDate: '2010-03-15', phoneNumber: '0912345678', note: 'Lớp trưởng, học tốt môn Sinh', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10a-02', studentCode: 'HS10A02', name: 'Trần Thị B', classId: '10A', gender: 'Nữ', birthDate: '2010-07-22', phoneNumber: '0987654321', note: 'Lớp phó học tập', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10a-03', studentCode: 'HS10A03', name: 'Lê Hoàng Nam', classId: '10A', gender: 'Nam', birthDate: '2010-01-10', phoneNumber: '0903112233', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10a-04', studentCode: 'HS10A04', name: 'Phạm Thị Mai', classId: '10A', gender: 'Nữ', birthDate: '2010-09-05', phoneNumber: '0934556677', note: 'Năng nổ phát biểu', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10a-05', studentCode: 'HS10A05', name: 'Đặng Minh Khôi', classId: '10A', gender: 'Nam', birthDate: '2010-11-18', phoneNumber: '', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10a-06', studentCode: 'HS10A06', name: 'Vũ Thùy Linh', classId: '10A', gender: 'Nữ', birthDate: '2010-04-30', phoneNumber: '0978990011', note: 'Tổ trưởng tổ 1', createdAt: '2026-09-01T08:00:00Z' },

  // 10B
  { id: 'stu-10b-01', studentCode: 'HS10B01', name: 'Bùi Anh Tuấn', classId: '10B', gender: 'Nam', birthDate: '2010-05-12', phoneNumber: '0922334455', note: 'Lớp trưởng 10B', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10b-02', studentCode: 'HS10B02', name: 'Hoàng Thu Trang', classId: '10B', gender: 'Nữ', birthDate: '2010-08-19', phoneNumber: '0944556677', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10b-03', studentCode: 'HS10B03', name: 'Đỗ Quốc Bảo', classId: '10B', gender: 'Nam', birthDate: '2010-02-28', phoneNumber: '0966778899', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-10b-04', studentCode: 'HS10B04', name: 'Ngô Phương Anh', classId: '10B', gender: 'Nữ', birthDate: '2010-12-03', phoneNumber: '0988112233', note: '', createdAt: '2026-09-01T08:00:00Z' },

  // 11A
  { id: 'stu-11a-01', studentCode: 'HS11A01', name: 'Lê Gia Hưng', classId: '11A', gender: 'Nam', birthDate: '2009-06-14', phoneNumber: '0911224466', note: 'Đội tuyển HSG Sinh học', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-11a-02', studentCode: 'HS11A02', name: 'Nguyễn Ngọc Ánh', classId: '11A', gender: 'Nữ', birthDate: '2009-10-25', phoneNumber: '0933445577', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-11a-03', studentCode: 'HS11A03', name: 'Phan Hải Đăng', classId: '11A', gender: 'Nam', birthDate: '2009-03-08', phoneNumber: '', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-11a-04', studentCode: 'HS11A04', name: 'Trương Mỹ Duyên', classId: '11A', gender: 'Nữ', birthDate: '2009-09-17', phoneNumber: '0977881122', note: '', createdAt: '2026-09-01T08:00:00Z' },

  // 11B
  { id: 'stu-11b-01', studentCode: 'HS11B01', name: 'Đinh Trọng Hiếu', classId: '11B', gender: 'Nam', birthDate: '2009-01-20', phoneNumber: '0901239876', note: 'Lớp trưởng 11B', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-11b-02', studentCode: 'HS11B02', name: 'Mai Kim Ngân', classId: '11B', gender: 'Nữ', birthDate: '2009-11-11', phoneNumber: '0965432198', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-11b-03', studentCode: 'HS11B03', name: 'Hồ Quang Khải', classId: '11B', gender: 'Nam', birthDate: '2009-04-05', phoneNumber: '', note: '', createdAt: '2026-09-01T08:00:00Z' },

  // 12A
  { id: 'stu-12a-01', studentCode: 'HS12A01', name: 'Dương Văn Hùng', classId: '12A', gender: 'Nam', birthDate: '2008-08-15', phoneNumber: '0988776655', note: 'Đăng ký xét tuyển Khối B (Y Đa Khoa)', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-12a-02', studentCode: 'HS12A02', name: 'Lâm Khánh Vy', classId: '12A', gender: 'Nữ', birthDate: '2008-05-29', phoneNumber: '0944332211', note: 'Thủ khoa đợt thi thử', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-12a-03', studentCode: 'HS12A03', name: 'Chu Mạnh Cường', classId: '12A', gender: 'Nam', birthDate: '2008-12-01', phoneNumber: '', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-12a-04', studentCode: 'HS12A04', name: 'Tạ Thảo Nguyên', classId: '12A', gender: 'Nữ', birthDate: '2008-02-14', phoneNumber: '0912983476', note: '', createdAt: '2026-09-01T08:00:00Z' },

  // 12B
  { id: 'stu-12b-01', studentCode: 'HS12B01', name: 'Trịnh Công Minh', classId: '12B', gender: 'Nam', birthDate: '2008-07-07', phoneNumber: '0933119955', note: 'Lớp trưởng 12B', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-12b-02', studentCode: 'HS12B02', name: 'Đoàn Thảo Vy', classId: '12B', gender: 'Nữ', birthDate: '2008-10-10', phoneNumber: '0977224488', note: '', createdAt: '2026-09-01T08:00:00Z' },
  { id: 'stu-12b-03', studentCode: 'HS12B03', name: 'Nguyễn Hữu Phước', classId: '12B', gender: 'Nam', birthDate: '2008-03-23', phoneNumber: '', note: '', createdAt: '2026-09-01T08:00:00Z' },
];

// Initial default tasks
const DEFAULT_TASKS: Task[] = [
  {
    id: 'task-01',
    title: 'Nhiệm vụ 01 – Hoạt động khám phá cấu trúc tế bào nhân thực',
    subject: 'Sinh học',
    grade: 'Khối 10',
    classIds: ['10A', '10B'],
    lessonTopic: 'Chương 2: Cấu trúc tế bào nhân thực',
    objective: 'Phân tích được cấu tạo và chức năng của màng sinh chất, nhân tế bào và ti thể; so sánh tế bào thực vật và động vật.',
    requirements: 'Học sinh đọc SGK mục II & III, vẽ hoặc tổng hợp sơ đồ tư duy cấu trúc tế bào nhân thực. Nêu tối thiểu 3 điểm khác nhau giữa tế bào thực vật và tế bào động vật.',
    instructions: '1. Chuẩn bị file bài làm trên Word/PDF hoặc chụp ảnh bài vẽ sơ đồ tư duy rõ nét.\n2. Đặt tên file theo cú pháp: [TênHọcSinh]_[Lớp]_BaiTap01.\n3. Nhấn gửi bài trước thời hạn.',
    deadline: '2026-09-30T23:59',
    allowedFileTypes: ['word', 'pdf', 'image', 'powerpoint'],
    teacherNote: 'Khuyến khích các em sáng tạo hình ảnh minh họa rõ ràng. Bài nộp sớm sẽ được cộng điểm tinh thần học tập tích cực!',
    createdAt: '2026-09-20T08:30:00Z',
    status: 'active',
  },
  {
    id: 'task-02',
    title: 'Phiếu học tập số 02 – Quá trình quang hợp ở thực vật và năng suất cây trồng',
    subject: 'Sinh học',
    grade: 'Khối 11',
    classIds: ['11A', '11B'],
    lessonTopic: 'Trao đổi chất và chuyển hóa năng lượng ở thực vật',
    objective: 'Viết được phương trình tổng quát của quang hợp, so sánh pha sáng và pha tối, liên hệ giải pháp nâng cao năng suất cây trồng.',
    requirements: 'Hoàn thiện phiếu học tập bảng so sánh 3 nhóm thực vật C3, C4 và CAM. Giải thích tại sao cây mía và ngô có năng suất sinh học cao.',
    instructions: 'Tải file mẫu hoặc nộp bài viết tay chụp ảnh rõ nét. Chú ý trình bày khoa học, sạch đẹp.',
    deadline: '2026-10-05T21:00',
    allowedFileTypes: ['pdf', 'word', 'image'],
    teacherNote: 'Có thể làm việc theo nhóm 2 bạn hoặc cá nhân. Mỗi học sinh nộp bài độc lập.',
    createdAt: '2026-09-21T09:00:00Z',
    status: 'active',
  },
  {
    id: 'task-03',
    title: 'Dự án nhỏ – Quy luật di truyền Menđen và giải bài tập phả hệ',
    subject: 'Sinh học',
    grade: 'Khối 12',
    classIds: ['12A', '12B'],
    lessonTopic: 'Di truyền học và quy luật di truyền',
    objective: 'Vận dụng định luật phân li độc lập để giải bài toán lai hai cặp tính trạng và phân tích sơ đồ phả hệ bệnh di truyền.',
    requirements: 'Giải chi tiết 3 bài toán lai mẫu trong tài liệu cô đã phát trên lớp và tóm tắt các bước xác định bệnh do gen lặn hay trội trên NST thường/giới tính.',
    instructions: 'Chấp nhận file PDF, Word hoặc file trình chiếu PowerPoint tóm tắt.',
    deadline: '2026-10-10T23:59',
    allowedFileTypes: ['word', 'pdf', 'powerpoint'],
    teacherNote: 'Bài tập trọng tâm có trong đề thi tốt nghiệp THPT, các em chú ý các bẫy đề thi thường gặp!',
    createdAt: '2026-09-22T14:15:00Z',
    status: 'active',
  },
];

// Initial default submissions
const DEFAULT_SUBMISSIONS: Submission[] = [
  {
    id: 'sub-01',
    taskId: 'task-01',
    taskTitle: 'Nhiệm vụ 01 – Hoạt động khám phá cấu trúc tế bào nhân thực',
    studentName: 'Nguyễn Văn A',
    studentClass: '10A',
    fileName: 'NguyenVanA_10A_BaiTap01.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileSize: '1.2 MB',
    fileData: 'data:text/plain;charset=utf-8,BÀI LÀM: CẤU TRÚC TẾ BÀO NHÂN THỰC\nHọc sinh: Nguyễn Văn A - Lớp 10A\n1. Màng sinh chất cấu tạo theo mô hình khảm động...\n2. So sánh tế bào thực vật và động vật...',
    submittedAt: '2026-09-23T14:05:00Z',
    status: 'reviewed',
    teacherFeedback: 'Bài làm rất tốt, sơ đồ tư duy rõ ràng và có bổ sung phân tích bào quan ti thể chi tiết. Khen ngợi!',
    score: 9.5,
  },
  {
    id: 'sub-02',
    taskId: 'task-01',
    taskTitle: 'Nhiệm vụ 01 – Hoạt động khám phá cấu trúc tế bào nhân thực',
    studentName: 'Trần Thị B',
    studentClass: '10A',
    fileName: 'TranThiB_10A_BaoCao_TeBao.pdf',
    fileType: 'application/pdf',
    fileSize: '2.4 MB',
    fileData: 'data:text/plain;charset=utf-8,BÁO CÁO TẾ BÀO NHÂN THỰC - TRẦN THỊ B (10A)\nĐầy đủ hình vẽ minh họa lục lạp, không bào lớn ở tế bào thực vật.',
    submittedAt: '2026-09-23T14:08:00Z',
    status: 'reviewed',
    teacherFeedback: 'Trình bày khoa học, hình vẽ rất đẹp!',
    score: 10,
  },
  {
    id: 'sub-03',
    taskId: 'task-01',
    taskTitle: 'Nhiệm vụ 01 – Hoạt động khám phá cấu trúc tế bào nhân thực',
    studentName: 'Lê Văn C',
    studentClass: '10A',
    fileName: 'LeVanC_10A_SoDoTuDuy.png',
    fileType: 'image/png',
    fileSize: '3.1 MB',
    fileData: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400"><rect width="600" height="400" fill="%23f0fdf4"/><text x="50" y="50" fill="%23166534" font-size="20" font-family="sans-serif">SƠ ĐỒ TƯ DUY TẾ BÀO NHÂN THỰC - LÊ VĂN C 10A</text><circle cx="300" cy="200" r="100" fill="%23bbf7d0" stroke="%2315803d" stroke-width="3"/><text x="250" y="205" fill="%2314532d">NHÂN TẾ BÀO</text></svg>',
    submittedAt: '2026-09-23T14:15:00Z',
    status: 'submitted',
  },
  {
    id: 'sub-04',
    taskId: 'task-02',
    taskTitle: 'Phiếu học tập số 02 – Quá trình quang hợp ở thực vật và năng suất cây trồng',
    studentName: 'Phạm Minh Hoàng',
    studentClass: '11A',
    fileName: 'PhamMinhHoang_11A_PhieuHocTap2.pdf',
    fileType: 'application/pdf',
    fileSize: '850 KB',
    fileData: 'data:text/plain;charset=utf-8,PHIẾU HỌC TẬP 02: QUANG HỢP Ở C3, C4, CAM\nHọc sinh: Phạm Minh Hoàng - 11A',
    submittedAt: '2026-09-23T15:20:00Z',
    status: 'submitted',
  },
  {
    id: 'sub-05',
    taskId: 'task-02',
    taskTitle: 'Phiếu học tập số 02 – Quá trình quang hợp ở thực vật và năng suất cây trồng',
    studentName: 'Hoàng Thu Trang',
    studentClass: '11B',
    fileName: 'HoangThuTrang_11B_BaiTapQuangHop.docx',
    fileType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    fileSize: '1.8 MB',
    fileData: 'data:text/plain;charset=utf-8,BÀI LÀM: QUÁ TRÌNH QUANG HỢP - HOÀNG THU TRANG 11B',
    submittedAt: '2026-09-23T15:45:00Z',
    status: 'submitted',
  },
  {
    id: 'sub-06',
    taskId: 'task-03',
    taskTitle: 'Dự án nhỏ – Quy luật di truyền Menđen và giải bài tập phả hệ',
    studentName: 'Đỗ Gia Bảo',
    studentClass: '12A',
    fileName: 'DoGiaBao_12A_PhaHeDiTruyen.pptx',
    fileType: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    fileSize: '4.5 MB',
    fileData: 'data:text/plain;charset=utf-8,BÀI TRÌNH CHIẾU PHẢ HỆ VÀ QUY LUẬT MENĐEN - ĐỖ GIA BẢO 12A',
    submittedAt: '2026-09-23T16:10:00Z',
    status: 'reviewed',
    teacherFeedback: 'Giải thích phả hệ rất logic, lập luận chặt chẽ!',
    score: 9.8,
  },
];

// Initial default games
const DEFAULT_GAMES: Game[] = [
  {
    id: 'game-01',
    title: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    subject: 'Sinh học',
    grade: 'Khối 10',
    classIds: ['10A', '10B'],
    description: 'Trò chơi tương tác gồm câu hỏi trắc nghiệm, đúng/sai, ghép đôi và sắp xếp để củng cố kiến thức cuối tiết học.',
    timeLimitSeconds: 300,
    playCount: 18,
    createdAt: '2026-09-22T10:00:00Z',
    status: 'active',
    questions: [
      {
        id: 'q1',
        type: 'multiple_choice',
        prompt: 'Bào quan nào sau đây được ví như "nhà máy năng lượng" của tế bào nhân thực?',
        points: 20,
        options: ['Ti thể (Mitochondria)', 'Bộ máy Golgi', 'Ribosome', 'Lưới nội chất hạt'],
        correctAnswer: 'Ti thể (Mitochondria)',
        explanation: 'Ti thể là nơi diễn ra hô hấp tế bào, phân giải chất hữu cơ giải phóng năng lượng ATP cung cấp cho mọi hoạt động sống.',
      },
      {
        id: 'q2',
        type: 'true_false',
        prompt: 'Tế bào thực vật có thành tế bào bằng cellulose và bào quan lục lạp, trong khi tế bào động vật không có những đặc điểm này.',
        points: 20,
        correctBool: true,
        explanation: 'Đúng. Thành tế bào bằng cellulose quy định hình dạng cố định và bảo vệ tế bào thực vật, lục lạp giúp thực vật quang hợp.',
      },
      {
        id: 'q3',
        type: 'short_answer',
        prompt: 'Phân tử mang năng lượng phổ biến nhất được tế bào sử dụng trực tiếp có tên viết tắt là gì? (Gồm 3 chữ cái in hoa)',
        points: 20,
        acceptedAnswers: ['ATP', 'atp'],
        explanation: 'ATP (Adenosine Triphosphate) là đồng tiền năng lượng của mọi tế bào sinh vật.',
      },
      {
        id: 'q4',
        type: 'matching',
        prompt: 'Em hãy ghép đôi các bào quan sau với chức năng sinh học tương ứng:',
        points: 20,
        pairs: [
          { id: 'p1', left: 'Ribosome', right: 'Tổng hợp protein' },
          { id: 'p2', left: 'Lục lạp', right: 'Quang hợp tạo chất hữu cơ' },
          { id: 'p3', left: 'Bộ máy Golgi', right: 'Đóng gói và phân phối chất' },
          { id: 'p4', left: 'Nhân tế bào', right: 'Chứa vật chất di truyền ADN' },
        ],
        explanation: 'Mỗi bào quan trong tế bào đảm nhận một chức năng chuyên hóa tạo nên sự phối hợp nhịp nhàng.',
      },
      {
        id: 'q5',
        type: 'ordering',
        prompt: 'Hãy sắp xếp các cấp độ tổ chức sống sau theo thứ tự từ THẤP đến CAO:',
        points: 20,
        orderedItems: [
          'Phân tử sinh học',
          'Tế bào',
          'Mô',
          'Cơ quan',
          'Cơ thể',
        ],
        explanation: 'Trật tự tổ chức sống: Phân tử -> Tế bào -> Mô -> Cơ quan -> Hệ cơ quan -> Cơ thể.',
      },
    ],
  },
  {
    id: 'game-02',
    title: 'Đấu trí Thần Tốc: Di truyền học Menđen & ADN (Sinh học 12)',
    subject: 'Sinh học',
    grade: 'Khối 12',
    classIds: ['12A', '12B'],
    description: 'Thử thách trắc nghiệm nhanh 5 câu hỏi trọng tâm kiến thức Menđen và cơ chế di truyền cấp phân tử.',
    timeLimitSeconds: 240,
    playCount: 14,
    createdAt: '2026-09-23T08:00:00Z',
    status: 'active',
    questions: [
      {
        id: 'q12_1',
        type: 'multiple_choice',
        prompt: 'Trong phép lai một cặp tính trạng của Menđen, tỉ lệ phân li kiểu hình ở thế hệ F2 là:',
        points: 25,
        options: ['3 trội : 1 lặn', '1 trội : 1 lặn', '1 trội : 2 trung gian : 1 lặn', '9 : 3 : 3 : 1'],
        correctAnswer: '3 trội : 1 lặn',
        explanation: 'Menđen thực hiện phép lai cây đậu Hà Lan hoa đỏ và hoa trắng thuần chủng thu được F2 có tỉ lệ 3 đỏ : 1 trắng.',
      },
      {
        id: 'q12_2',
        type: 'true_false',
        prompt: 'Theo nguyên tắc bổ sung trong cấu trúc ADN, Adenine (A) luôn liên kết với Guanine (G) bằng 3 liên kết hydro.',
        points: 25,
        correctBool: false,
        explanation: 'Sai. A liên kết với T bằng 2 liên kết hydro, G liên kết với X (C) bằng 3 liên kết hydro.',
      },
      {
        id: 'q12_3',
        type: 'short_answer',
        prompt: 'Tên gọi của bộ ba mở đầu mã hóa axit amin Methionine trên mARN là gì? (3 chữ cái in hoa)',
        points: 25,
        acceptedAnswers: ['AUG', 'aug'],
        explanation: 'Bộ ba mở đầu AUG quy định dịch mã axit amin Methionine ở sinh vật nhân thực.',
      },
      {
        id: 'q12_4',
        type: 'ordering',
        prompt: 'Hãy sắp xếp các bước trong quá trình nhân đôi ADN theo trình tự đúng:',
        points: 25,
        orderedItems: [
          'Tháo xoắn phân tử ADN',
          'Tổng hợp các mạch ADN mới theo nguyên tắc bổ sung',
          'Hai phân tử ADN con xoắn lại',
        ],
        explanation: 'Quá trình nhân đôi gồm 3 bước: Tháo xoắn -> Tổng hợp mạch mới -> Tạo 2 phân tử ADN con.',
      },
    ],
  },
];

// Initial default game results with TOP 5 ranking
const DEFAULT_GAME_RESULTS: GameResult[] = [
  {
    id: 'res-01',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Trần Thị B',
    studentClass: '10A',
    score: 100,
    maxScore: 100,
    correctCount: 5,
    incorrectCount: 0,
    totalQuestions: 5,
    timeSpentSeconds: 48,
    completedAt: '2026-09-23T10:15:00Z',
  },
  {
    id: 'res-02',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Nguyễn Văn A',
    studentClass: '10A',
    score: 100,
    maxScore: 100,
    correctCount: 5,
    incorrectCount: 0,
    totalQuestions: 5,
    timeSpentSeconds: 62,
    completedAt: '2026-09-23T10:16:00Z',
  },
  {
    id: 'res-03',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Lê Văn C',
    studentClass: '10A',
    score: 80,
    maxScore: 100,
    correctCount: 4,
    incorrectCount: 1,
    totalQuestions: 5,
    timeSpentSeconds: 75,
    completedAt: '2026-09-23T10:17:00Z',
  },
  {
    id: 'res-04',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Vũ Thùy Linh',
    studentClass: '10B',
    score: 80,
    maxScore: 100,
    correctCount: 4,
    incorrectCount: 1,
    totalQuestions: 5,
    timeSpentSeconds: 88,
    completedAt: '2026-09-23T10:18:00Z',
  },
  {
    id: 'res-05',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Đặng Quốc Tuấn',
    studentClass: '10B',
    score: 60,
    maxScore: 100,
    correctCount: 3,
    incorrectCount: 2,
    totalQuestions: 5,
    timeSpentSeconds: 94,
    completedAt: '2026-09-23T10:19:00Z',
  },
  {
    id: 'res-06',
    gameId: 'game-01',
    gameTitle: 'Trò chơi củng cố: Ôn tập nhanh Tế bào học (Sinh học 10)',
    studentName: 'Bùi Phương Thảo',
    studentClass: '10A',
    score: 60,
    maxScore: 100,
    correctCount: 3,
    incorrectCount: 2,
    totalQuestions: 5,
    timeSpentSeconds: 110,
    completedAt: '2026-09-23T10:20:00Z',
  },
  {
    id: 'res-07',
    gameId: 'game-02',
    gameTitle: 'Đấu trí Thần Tốc: Di truyền học Menđen & ADN (Sinh học 12)',
    studentName: 'Đỗ Gia Bảo',
    studentClass: '12A',
    score: 100,
    maxScore: 100,
    correctCount: 4,
    incorrectCount: 0,
    totalQuestions: 4,
    timeSpentSeconds: 52,
    completedAt: '2026-09-23T11:00:00Z',
  },
  {
    id: 'res-08',
    gameId: 'game-02',
    gameTitle: 'Đấu trí Thần Tốc: Di truyền học Menđen & ADN (Sinh học 12)',
    studentName: 'Nguyễn Thanh Tùng',
    studentClass: '12B',
    score: 75,
    maxScore: 100,
    correctCount: 3,
    incorrectCount: 1,
    totalQuestions: 4,
    timeSpentSeconds: 65,
    completedAt: '2026-09-23T11:05:00Z',
  },
];

// Initial default notifications
const DEFAULT_NOTIFICATIONS: NotificationItem[] = [
  {
    id: 'notif-1',
    title: 'Học sinh nộp bài mới',
    message: 'Nguyễn Văn A – 10A vừa nộp bài cho “Nhiệm vụ 01 – Khám phá cấu trúc tế bào nhân thực”.',
    time: '14:05 hôm nay',
    type: 'submission',
    unread: true,
    linkTab: 'submissions',
    linkId: 'sub-01',
  },
  {
    id: 'notif-2',
    title: 'Trò chơi củng cố hoàn tất',
    message: 'Trần Thị B – 10A vừa đạt điểm tuyệt đối 100/100 trò chơi “Ôn tập nhanh Tế bào học”.',
    time: '14:15 hôm nay',
    type: 'game',
    unread: true,
    linkTab: 'results',
    linkId: 'game-01',
  },
  {
    id: 'notif-3',
    title: 'Nhiệm vụ sắp đến hạn',
    message: 'Nhiệm vụ 01 lớp 10A & 10B đã có 3 học sinh nộp bài. Hạn nộp còn 7 ngày.',
    time: '08:30 hôm nay',
    type: 'system',
    unread: false,
    linkTab: 'tasks',
    linkId: 'task-01',
  },
];

class StorageService {
  private getItem<T>(key: string, defaultVal: T): T {
    try {
      const data = localStorage.getItem(key);
      if (!data) return defaultVal;
      return JSON.parse(data) as T;
    } catch {
      return defaultVal;
    }
  }

  private setItem<T>(key: string, val: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(val));
    } catch (e) {
      console.warn('LocalStorage quota or write error', e);
    }
  }

  // --- Initialize Storage ---
  public initialize(): void {
    if (!localStorage.getItem(STORAGE_KEYS.CLASSES)) {
      this.setItem(STORAGE_KEYS.CLASSES, DEFAULT_CLASSES);
    }
    if (!localStorage.getItem(STORAGE_KEYS.STUDENTS)) {
      this.setItem(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.TASKS)) {
      this.setItem(STORAGE_KEYS.TASKS, DEFAULT_TASKS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.SUBMISSIONS)) {
      this.setItem(STORAGE_KEYS.SUBMISSIONS, DEFAULT_SUBMISSIONS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.GAMES)) {
      this.setItem(STORAGE_KEYS.GAMES, DEFAULT_GAMES);
    }
    if (!localStorage.getItem(STORAGE_KEYS.GAME_RESULTS)) {
      this.setItem(STORAGE_KEYS.GAME_RESULTS, DEFAULT_GAME_RESULTS);
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      this.setItem(STORAGE_KEYS.NOTIFICATIONS, DEFAULT_NOTIFICATIONS);
    }
    // Ensure scores are calculated and ranks assigned for all students
    this.recalculateAllScores();
  }

  // --- Classes ---
  public getClasses(): Classroom[] {
    return this.getItem(STORAGE_KEYS.CLASSES, DEFAULT_CLASSES);
  }

  public saveClass(cls: Classroom): Classroom {
    const list = this.getClasses();
    const index = list.findIndex(c => c.id === cls.id);
    if (index >= 0) {
      list[index] = cls;
    } else {
      list.push(cls);
    }
    this.setItem(STORAGE_KEYS.CLASSES, list);
    return cls;
  }

  public deleteClass(classId: string): void {
    const list = this.getClasses().filter(c => c.id !== classId);
    this.setItem(STORAGE_KEYS.CLASSES, list);
    // Also remove students of this class
    const students = this.getStudents().filter(s => s.classId !== classId);
    this.setItem(STORAGE_KEYS.STUDENTS, students);
  }

  // --- Students ---
  public getStudents(): Student[] {
    return this.getItem(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
  }

  public getStudentsByClass(classId: string): Student[] {
    return this.getStudents().filter(s => s.classId === classId);
  }

  public getStudentById(id: string): Student | undefined {
    return this.getStudents().find(s => s.id === id);
  }

  public getStudentByCodeOrName(classId: string, query: string): Student | undefined {
    const q = query.trim().toLowerCase();
    return this.getStudents().find(s => 
      s.classId === classId && 
      (s.name.toLowerCase() === q || (s.studentCode && s.studentCode.toLowerCase() === q))
    );
  }

  public findOrCreateStudent(name: string, classId: string, studentCode?: string): Student {
    const students = this.getStudents();
    const trimmedName = name.trim();
    let student = students.find(s => 
      s.classId === classId && 
      (s.name.toLowerCase().trim() === trimmedName.toLowerCase() || 
       (studentCode && s.studentCode && s.studentCode.toUpperCase() === studentCode.toUpperCase()))
    );

    if (!student) {
      const classStudents = students.filter(s => s.classId === classId);
      const newCode = studentCode || `HS${classId}${String(classStudents.length + 1).padStart(2, '0')}`;
      student = {
        id: `stu-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        studentCode: newCode,
        name: trimmedName,
        classId,
        gender: 'Nam',
        createdAt: new Date().toISOString(),
        totalScore: 0,
        submissionScore: 0,
        gameScore: 0,
        bonusScore: 0,
        submissionCount: 0,
        gameCount: 0,
        rankInClass: classStudents.length + 1,
        badges: [],
        scoreHistory: [],
      };
      students.push(student);
      this.setItem(STORAGE_KEYS.STUDENTS, students);
      this.updateClassStudentCount(classId);
    }
    return student;
  }

  public recalculateAllScores(): void {
    const students = this.getStudents();
    const submissions = this.getSubmissions();
    const gameResults = this.getGameResults();

    students.forEach(student => {
      // Find all submissions by this student
      const stuSubs = submissions.filter(s => 
        (s.studentClass === student.classId || s.studentClass.includes(student.classId)) &&
        s.studentName.toLowerCase().trim() === student.name.toLowerCase().trim()
      );

      // Find all game results by this student
      const stuGames = gameResults.filter(g =>
        (g.studentClass === student.classId || g.studentClass.includes(student.classId)) &&
        g.studentName.toLowerCase().trim() === student.name.toLowerCase().trim()
      );

      let subScore = 0;
      const history: any[] = [];

      stuSubs.forEach(sub => {
        // +10 điểm chuyên cần nộp bài
        subScore += 10;
        history.push({
          id: `hist-sub-${sub.id}`,
          type: 'submission',
          title: `Nộp bài: ${sub.taskTitle}`,
          pointsEarned: 10,
          date: sub.submittedAt,
          referenceId: sub.taskId,
        });

        // Điểm cô giáo chấm: thang điểm 10 quy đổi ra tối đa 100 điểm
        if (sub.score !== undefined && sub.score !== null) {
          const gradePoints = Math.round(Number(sub.score) * 10);
          subScore += gradePoints;
          history.push({
            id: `hist-grade-${sub.id}`,
            type: 'review',
            title: `Cô Dung chấm điểm: ${sub.taskTitle} (${sub.score}/10đ)`,
            pointsEarned: gradePoints,
            date: sub.submittedAt,
            note: sub.teacherFeedback || 'Đã chấm điểm hoàn thành nhiệm vụ',
            referenceId: sub.id,
          });
        }
      });

      // Điểm trò chơi củng cố
      let gameScore = 0;
      stuGames.forEach(res => {
        gameScore += res.score;
        history.push({
          id: `hist-game-${res.id}`,
          type: 'game',
          title: `Trò chơi củng cố: ${res.gameTitle} (${res.correctCount}/${res.totalQuestions} đúng)`,
          pointsEarned: res.score,
          date: res.completedAt,
          referenceId: res.gameId,
        });
      });

      // Điểm thưởng phát biểu/rèn luyện
      const bonus = student.bonusScore || 0;
      if (student.scoreHistory) {
        student.scoreHistory.filter(h => h.type === 'bonus').forEach(b => {
          if (!history.find(x => x.id === b.id)) {
            history.push(b);
          }
        });
      }

      const total = subScore + gameScore + bonus;

      // Badges calculation
      const badges: any[] = [];
      if (stuSubs.length >= 1) {
        badges.push({
          id: 'badge-first-sub',
          name: 'Tiên Phong Nộp Bài',
          icon: 'target',
          description: 'Đã hoàn thành và nộp bài tập đúng hạn',
          earnedAt: stuSubs[0].submittedAt,
        });
      }
      if (stuSubs.length >= 2) {
        badges.push({
          id: 'badge-hardworking',
          name: 'Chiến Binh Chăm Chỉ',
          icon: 'flame',
          description: 'Nộp từ 2 bài tập trở lên',
          earnedAt: stuSubs[stuSubs.length - 1].submittedAt,
        });
      }
      if (stuGames.length >= 1) {
        badges.push({
          id: 'badge-first-game',
          name: 'Khám Phá Trò Chơi',
          icon: 'zap',
          description: 'Đã tham gia thử thách trò chơi Sinh học',
          earnedAt: stuGames[0].completedAt,
        });
      }
      if (stuGames.some(g => g.score >= 100)) {
        badges.push({
          id: 'badge-perfect-score',
          name: 'Thủ Khoa Trắc Nghiệm',
          icon: 'trophy',
          description: 'Đạt điểm tuyệt đối 100/100 trong trò chơi củng cố',
          earnedAt: new Date().toISOString(),
        });
      }
      if (total >= 150) {
        badges.push({
          id: 'badge-bio-star',
          name: 'Ngôi Sao Sinh Học',
          icon: 'star',
          description: 'Đạt tổng điểm tích lũy trên 150 điểm trong lớp',
          earnedAt: new Date().toISOString(),
        });
      }

      // Sort history descending by date
      history.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

      student.submissionScore = subScore;
      student.gameScore = gameScore;
      student.bonusScore = bonus;
      student.totalScore = total;
      student.submissionCount = stuSubs.length;
      student.gameCount = stuGames.length;
      student.badges = badges;
      student.scoreHistory = history;
    });

    // Calculate rank in class
    const classIds = Array.from(new Set(students.map(s => s.classId)));
    classIds.forEach(cid => {
      const inClass = students.filter(s => s.classId === cid);
      inClass.sort((a, b) => (b.totalScore || 0) - (a.totalScore || 0));
      inClass.forEach((st, idx) => {
        st.rankInClass = idx + 1;
      });
    });

    this.setItem(STORAGE_KEYS.STUDENTS, students);
  }

  public addBonusScore(studentId: string, points: number, reason: string): void {
    const students = this.getStudents();
    const student = students.find(s => s.id === studentId);
    if (student) {
      student.bonusScore = (student.bonusScore || 0) + points;
      const historyItem = {
        id: `hist-bonus-${Date.now()}`,
        type: 'bonus' as const,
        title: reason || 'Cô Dung thưởng điểm phát biểu / rèn luyện',
        pointsEarned: points,
        date: new Date().toISOString(),
        note: 'Điểm thưởng trực tiếp từ giáo viên',
      };
      student.scoreHistory = [historyItem, ...(student.scoreHistory || [])];
      this.setItem(STORAGE_KEYS.STUDENTS, students);
      this.recalculateAllScores();
    }
  }

  public saveStudent(student: Student): Student {
    const list = this.getStudents();
    const index = list.findIndex(s => s.id === student.id);
    if (index >= 0) {
      list[index] = student;
    } else {
      list.push(student);
    }
    this.setItem(STORAGE_KEYS.STUDENTS, list);
    this.updateClassStudentCount(student.classId);
    this.recalculateAllScores();
    return student;
  }

  public saveStudents(newStudents: Student[]): void {
    const list = this.getStudents();
    newStudents.forEach(stu => {
      const idx = list.findIndex(s => s.id === stu.id || (s.studentCode && stu.studentCode && s.studentCode === stu.studentCode && s.classId === stu.classId));
      if (idx >= 0) {
        list[idx] = { ...list[idx], ...stu };
      } else {
        list.push(stu);
      }
    });
    this.setItem(STORAGE_KEYS.STUDENTS, list);

    const affectedClasses = Array.from(new Set(newStudents.map(s => s.classId)));
    affectedClasses.forEach(cid => this.updateClassStudentCount(cid));
    this.recalculateAllScores();
  }

  public deleteStudent(studentId: string): void {
    const list = this.getStudents();
    const student = list.find(s => s.id === studentId);
    const filtered = list.filter(s => s.id !== studentId);
    this.setItem(STORAGE_KEYS.STUDENTS, filtered);
    if (student) {
      this.updateClassStudentCount(student.classId);
    }
  }

  public deleteStudents(studentIds: string[]): void {
    const list = this.getStudents();
    const idSet = new Set(studentIds);
    const affectedClasses = new Set(list.filter(s => idSet.has(s.id)).map(s => s.classId));
    const filtered = list.filter(s => !idSet.has(s.id));
    this.setItem(STORAGE_KEYS.STUDENTS, filtered);
    affectedClasses.forEach(cid => this.updateClassStudentCount(cid));
  }

  private updateClassStudentCount(classId: string): void {
    const classes = this.getClasses();
    const cls = classes.find(c => c.id === classId);
    if (cls) {
      const count = this.getStudentsByClass(classId).length;
      cls.studentCount = count;
      this.setItem(STORAGE_KEYS.CLASSES, classes);
    }
  }

  // --- Tasks ---
  public getTasks(): Task[] {
    return this.getItem(STORAGE_KEYS.TASKS, DEFAULT_TASKS);
  }

  public getTaskById(id: string): Task | undefined {
    return this.getTasks().find(t => t.id === id);
  }

  public saveTask(task: Task): Task {
    const list = this.getTasks();
    const index = list.findIndex(t => t.id === task.id);
    if (index >= 0) {
      list[index] = task;
    } else {
      list.unshift(task);
    }
    this.setItem(STORAGE_KEYS.TASKS, list);
    return task;
  }

  public deleteTask(taskId: string): void {
    const list = this.getTasks().filter(t => t.id !== taskId);
    this.setItem(STORAGE_KEYS.TASKS, list);
  }

  // --- Submissions ---
  public getSubmissions(): Submission[] {
    return this.getItem(STORAGE_KEYS.SUBMISSIONS, DEFAULT_SUBMISSIONS);
  }

  public getSubmissionsByTaskId(taskId: string): Submission[] {
    return this.getSubmissions().filter(s => s.taskId === taskId);
  }

  public getSubmissionsByClass(classId: string): Submission[] {
    return this.getSubmissions().filter(s => s.studentClass === classId || s.studentClass.includes(classId));
  }

  public addSubmission(submission: Submission): Submission {
    const list = this.getSubmissions();
    list.unshift(submission);
    this.setItem(STORAGE_KEYS.SUBMISSIONS, list);

    // Auto-create or find student account & award points
    this.findOrCreateStudent(submission.studentName, submission.studentClass);
    this.recalculateAllScores();

    // Auto-generate notification
    this.addNotification({
      id: `notif-${Date.now()}`,
      title: 'Học sinh nộp bài mới',
      message: `${submission.studentName} – ${submission.studentClass} vừa nộp bài cho “${submission.taskTitle}” (+10 điểm chuyên cần vào tài khoản).`,
      time: 'Vừa xong',
      type: 'submission',
      unread: true,
      linkTab: 'submissions',
      linkId: submission.id,
    });

    return submission;
  }

  public saveSubmission(submission: Submission): Submission {
    return this.addSubmission(submission);
  }

  public updateSubmission(submission: Submission): void {
    const list = this.getSubmissions();
    const index = list.findIndex(s => s.id === submission.id);
    if (index >= 0) {
      list[index] = submission;
      this.setItem(STORAGE_KEYS.SUBMISSIONS, list);
      this.recalculateAllScores();
    }
  }

  // --- Games ---
  public getGames(): Game[] {
    return this.getItem(STORAGE_KEYS.GAMES, DEFAULT_GAMES);
  }

  public getGameById(id: string): Game | undefined {
    return this.getGames().find(g => g.id === id);
  }

  public saveGame(game: Game): Game {
    const list = this.getGames();
    const index = list.findIndex(g => g.id === game.id);
    if (index >= 0) {
      list[index] = game;
    } else {
      list.unshift(game);
    }
    this.setItem(STORAGE_KEYS.GAMES, list);
    return game;
  }

  public deleteGame(gameId: string): void {
    const list = this.getGames().filter(g => g.id !== gameId);
    this.setItem(STORAGE_KEYS.GAMES, list);
  }

  public incrementGamePlay(gameId: string): void {
    const list = this.getGames();
    const game = list.find(g => g.id === gameId);
    if (game) {
      game.playCount = (game.playCount || 0) + 1;
      this.setItem(STORAGE_KEYS.GAMES, list);
    }
  }

  // --- Game Results & Rankings ---
  public getGameResults(): GameResult[] {
    return this.getItem(STORAGE_KEYS.GAME_RESULTS, DEFAULT_GAME_RESULTS);
  }

  public getResultsByGameId(gameId: string): GameResult[] {
    return this.getGameResults()
      .filter(r => r.gameId === gameId)
      .sort((a, b) => {
        if (b.score !== a.score) return b.score - a.score;
        return a.timeSpentSeconds - b.timeSpentSeconds;
      });
  }

  public addGameResult(result: GameResult): GameResult {
    const list = this.getGameResults();
    list.unshift(result);
    this.setItem(STORAGE_KEYS.GAME_RESULTS, list);
    this.incrementGamePlay(result.gameId);

    // Auto-create or find student account & award points
    this.findOrCreateStudent(result.studentName, result.studentClass);
    this.recalculateAllScores();

    // Notification
    this.addNotification({
      id: `notif-${Date.now()}`,
      title: 'Hoàn thành trò chơi củng cố',
      message: `${result.studentName} – ${result.studentClass} vừa đạt ${result.score}/${result.maxScore} điểm trò chơi “${result.gameTitle}” (+${result.score} điểm vào tài khoản).`,
      time: 'Vừa xong',
      type: 'game',
      unread: true,
      linkTab: 'results',
      linkId: result.gameId,
    });

    return result;
  }

  public saveGameResult(result: GameResult): GameResult {
    return this.addGameResult(result);
  }

  // --- Notifications ---
  public getNotifications(): NotificationItem[] {
    return this.getItem(STORAGE_KEYS.NOTIFICATIONS, DEFAULT_NOTIFICATIONS);
  }

  public addNotification(item: NotificationItem): void {
    const list = this.getNotifications();
    list.unshift(item);
    if (list.length > 50) list.pop();
    this.setItem(STORAGE_KEYS.NOTIFICATIONS, list);
  }

  public markNotificationRead(id: string): void {
    const list = this.getNotifications().map(n => n.id === id ? { ...n, unread: false, read: true } : n);
    this.setItem(STORAGE_KEYS.NOTIFICATIONS, list);
  }

  public markAllNotificationsRead(): void {
    const list = this.getNotifications().map(n => ({ ...n, unread: false, read: true }));
    this.setItem(STORAGE_KEYS.NOTIFICATIONS, list);
  }

  // --- Export & Reset ---
  public exportData(): string {
    const fullData = {
      classes: this.getClasses(),
      students: this.getStudents(),
      tasks: this.getTasks(),
      submissions: this.getSubmissions(),
      games: this.getGames(),
      gameResults: this.getGameResults(),
      notifications: this.getNotifications(),
      exportedAt: new Date().toISOString(),
      teacherName: 'Cô giáo Nguyễn Thị Dung',
      schoolSystem: 'Lớp Học Số THPT',
    };
    return JSON.stringify(fullData, null, 2);
  }

  public importData(jsonString: string): boolean {
    try {
      const data = JSON.parse(jsonString);
      if (data.classes) this.setItem(STORAGE_KEYS.CLASSES, data.classes);
      if (data.students) this.setItem(STORAGE_KEYS.STUDENTS, data.students);
      if (data.tasks) this.setItem(STORAGE_KEYS.TASKS, data.tasks);
      if (data.submissions) this.setItem(STORAGE_KEYS.SUBMISSIONS, data.submissions);
      if (data.games) this.setItem(STORAGE_KEYS.GAMES, data.games);
      if (data.gameResults) this.setItem(STORAGE_KEYS.GAME_RESULTS, data.gameResults);
      if (data.notifications) this.setItem(STORAGE_KEYS.NOTIFICATIONS, data.notifications);
      this.recalculateAllScores();
      return true;
    } catch (e) {
      console.error('Import failed', e);
      return false;
    }
  }

  public resetToSampleData(): void {
    this.setItem(STORAGE_KEYS.CLASSES, DEFAULT_CLASSES);
    this.setItem(STORAGE_KEYS.STUDENTS, DEFAULT_STUDENTS);
    this.setItem(STORAGE_KEYS.TASKS, DEFAULT_TASKS);
    this.setItem(STORAGE_KEYS.SUBMISSIONS, DEFAULT_SUBMISSIONS);
    this.setItem(STORAGE_KEYS.GAMES, DEFAULT_GAMES);
    this.setItem(STORAGE_KEYS.GAME_RESULTS, DEFAULT_GAME_RESULTS);
    this.setItem(STORAGE_KEYS.NOTIFICATIONS, DEFAULT_NOTIFICATIONS);
    this.recalculateAllScores();
  }
}

export const storage = new StorageService();
// Run init immediately
storage.initialize();
