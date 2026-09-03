import { Dish, Review, FAQItem } from '../types';

export const ASSETS = {
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBypNz0ltfH2DYJrUEYHzBlMQUWYLz2npa_fAeyvq9Q6aze9YIbwQfYteYupRix2d7QAHkGJgq-fMu3cK5Mb5lWpbQBkfovH2OrDUmRtZFdWkDdkKI4K3o3z_MAU1waq5iNfpIyf52AhdpXF_-qYqAqmKj_zePYcfDc7nYErdgY-LsehFW7zn7PvVs0QequEWMCkxPdYoDIQRukEb_-myo48y0-yBswGLiBZg5FcyKXzOyBWvzJcB-T',
  heroAbalone: 'https://cdn.upanhlaylink.com/i/G8Zv0xSK.png',
  heroAbalone2: 'https://cdn.upanhlaylink.com/i/zSCriGvZ.png',
  heroAbalone3: 'https://cdn.upanhlaylink.com/i/f3wGR1Kk.png',
  chaoBaoNgu: 'https://cdn.upanhlaylink.com/i/8t3Pr6cG.png',
  sotDauHao: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlL4E7L7lr53rSH3Jpo0dweG9dunCgBNQPRWCMxO5-2FMrJtjFjAastLVXwm49P6dTI_9k6dwENe0pJ4tFQlAlhedy0xYLp_2WTuCQjMq_NeG5F2yXSxxGnFNsw4-H99Wj8_l2cvVSepZYA8fIChNfNQKfeetfmGg7IfJ5nUo1G08dzX6XMojb_AiD4dywEORfbWl0kXSy4cFGcYUspFnSHUPhNcYP1yd5VHMmx1phrc3P31VVf-iJ',
  nuongMoHanh: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDx2NMkWMxjmeb96M9ZPpqKzwxMmEYKZGLeYGNLpv16KrNkt-NQYlDsFw3vVPtuc5KyMMlF_4h-I-_MWhnPFDYfZiNQMRlBcBJK8sAZeGte3aFSj1La_RuQVbv62QXSbtm8ri9ATKPWFnS6zZn3p6zQDe1GYhUPSp2Dh16eOGyhykXx9HNwh2WisMahUP6IuTCn5NnJmnUIcOf0RY6hasgLdhZAUvuO6-InfnoDX8HWi4g7rdKxaMIl',
  supHaiSan: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBVN_2BcH3yXBM5UsiGfOUz3JVrWXvjydRwBqZ0diObaknOuzfQeoXPobwpODA9-Us-HPl2vRb8hwO4jg3QiEezTGvD3Dyv1FYKwbaCaHhMbYFPEqNxg6hGFTdf_wmnaUjbhWLSZvGfo2pQInEpOsFBLBYyC7QIgtk5RsSBBucF6F6_3_typi_5DnCxfial9vmttmakeSxCrreKBzGtiFkJF3qFX0wDhsuMxZN1p0M5pNBx1w1PsHNt',
  hamNam: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYZX-51EYQSgEOf3oHz8uOsBErZaM-wASuuVNwewEj6i_KzfQHOubiazuQy3jju9NRwjb5x_GGjTzWZTxqlS47t0oYDcVXUxZcm24nsGuCGO3QRmewbT8J_gFdFQCkqClC3VNvBJvFR3JbFkwXe0uJEVXSVAR4t-ESRa5ZKm55c1xQxrp9VYv_btdOrs-sEOr4Wi7Hz4Rq_m_y4xFbcWgAw-bgWL-ag7Bh8qcT_-1RmGV9Am9yT42H',
  tiemThanhMat: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALcrQrIj9rwlkMjHuoLJ-yzR1zKCqR88361DmXpQTaD_4rB4cMhL3M4AzIlzRVM-IYJCGjRuCgqlgRXha4oKMRQDu_FcOnWmR26yQkdejOnPpUT0Nxq7NhgZY52bCwB-ESCpdysVKYggXS-pVi1PTumGk4zMFuKZI8psGAq0muxBpYEz0n8kOO7GXqGBiFa9j4_p8iklVXsXrTpT7IQCKXS6NTc5m-ma0K9Yat7lqJU2acj28LMNxn',
  qualityCloseup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCSOAn5J2bhhAP0sj1NyW6DsD5xHYvjB-_0_0T2P5uUkK-VxiFNu4QLAa4TxuWH0BuSF9DZvAMdbb86Xuq8n-sxKtB9afMUZ4IH5q46rsySy2Lti8uh6aeSNkYMoFvXIx5fAsTqJ8AXLLFLyVzJGA1-x8huRt5vd6479SRC3Eyh43NfwUyiZajIxinPFRFm3fD7ncZHt6YJB2_J-ZW6Q166Cbxa65iYqEz-RJh_f8jzm3Bwjn3uWdBO',
  porridgeSteam: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfyyEvoOb_zUgWvozmZp6KNsJhYrqV5kr3rNBLr-UqG1-uX9CrivxyfoQiYRjgns2c5168tDIOFJSjjzyMGtB3WsHUfUHB-mrtwu0rcDufD2DKsBFSdzcuRIDmgnGRfbCfotfx2_ykG6wLC23qeeEw7ATcEGrVtcQosGMD7c3HfOYZfqpsQhXWMRJkdrSih8gri7qm5jYu9_jbYghDL3uaGFiE4xyjezk5hFrdCBRQ7PQTv4lAlmMT',
  herbalSoup: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCLLDpcxXZvnIJ88tbczzOjOnaJpqLAto5qjsiQiCMP-RKU-sZzyuEvexHpXy2zPdg2J8_0KrsI_hr46hYCX6BmU3MYj8IoQiRrFQsYDG5ww0UDhFKdIHumwzO5ulZmDFt5Qw3qOefppNH9-gAQNE4wNjGzigwRhesOlHeCZT37GgifBxyK7lHdWQaCc8KCj83EFwFfeW0fA7Brx0Hd9bviUhPjfVUjJjNDoL7rRHGYZOUsWPJ5rUuk',
};

export const DISHES: Dish[] = [
  {
    id: 'chao-bao-ngu',
    name: 'Cháo Bào Ngư Bổ Dưỡng',
    tag: 'BỔ DƯỠNG SỐ 1',
    tagBg: 'bg-primary-fixed text-primary',
    desc: 'Hạt gạo sánh mịn hòa cùng thịt bào ngư giòn dai ngọt thanh, bồi bổ sức khỏe cho cả gia đình, người lớn tuổi và trẻ nhỏ.',
    time: '25 phút',
    highlight: 'Giàu đạm, dễ tiêu hóa',
    icon: 'soup_kitchen',
    image: ASSETS.chaoBaoNgu,
    prepTime: '10 phút chuẩn bị',
    difficulty: 'Dễ nấu',
    servings: '3-4 người',
    ingredients: [
      '4-5 con bào ngư Golden Food rã đông',
      '1 bát gạo tẻ thơm pha 1 nắm gạo nếp',
      'Nước hầm xương hoặc gà thanh ngọt',
      'Hành hoa, ngò rí, tiêu sọ, gừng tươi thái chỉ',
      'Gia vị: Nước mắm ngon, hạt nêm, dầu mè'
    ],
    steps: [
      'Bào ngư sau rã đông rửa sạch bằng nước muối loãng, cắt miếng vừa ăn hoặc khía hoa nhẹ trên mặt.',
      'Gạo vo sạch, nấu nhừ cùng nước hầm xương với lửa nhỏ liu riu cho sánh mịn.',
      'Phi thơm đầu hành lá và gừng với chút dầu mè, cho thịt bào ngư vào xào nhanh 1-2 phút cho săn thơm.',
      'Trút bào ngư vào nồi cháo đang sôi nhẹ, nêm nước mắm và hạt nêm vừa khẩu vị, đun thêm 3-5 phút.',
      'Múc ra bát, rắc hành ngò, tiêu xay và thưởng thức khi còn nóng hổi.'
    ],
    chefTip: 'Không nên xào bào ngư quá lâu trên lửa lớn sẽ làm giảm độ ngọt giòn tự nhiên của thịt.'
  },
  {
    id: 'sot-dau-hao',
    name: 'Bào Ngư Sốt Dầu Hào Thượng Hạng',
    tag: 'CHUẨN NHÀ HÀNG',
    tagBg: 'bg-secondary-fixed text-secondary',
    desc: 'Món ăn đậm phong vị ẩm thực Quảng Đông cao cấp, nước sốt óng ả sóng sánh bao phủ lấy từng thớ thịt bào ngư giòn sần sật.',
    time: '20 phút',
    highlight: 'Hương vị đậm đà, óng ánh',
    icon: 'dinner_dining',
    image: ASSETS.sotDauHao,
    prepTime: '10 phút',
    difficulty: 'Trung bình',
    servings: '2-4 người',
    ingredients: [
      '6 con bào ngư Golden Food nguyên con',
      '1 cây cải thìa (cải chíp) luộc chín tới',
      '4 nấm đông cô tươi hoặc ngâm nở',
      '2 muỗng canh dầu hào cao cấp, 1 muỗng xì dầu ngon',
      'Nước dùng xương hầm, bột bắp tạo độ sánh, tỏi băm'
    ],
    steps: [
      'Bào ngư khía caro trên bề mặt để ngấm đều sốt.',
      'Cải thìa rửa sạch, chần qua nước sôi có pha chút muối và dầu ăn cho xanh mướt rồi xếp quanh đĩa.',
      'Phi tỏi thơm lừng, cho nấm đông cô và bào ngư vào xào săn.',
      'Hòa dầu hào, xì dầu, chút đường và nước dùng xương, trút vào chảo đảo đều cho ngấm gia vị.',
      'Cho một ít nước bột bắp hòa tan vào quấy đều đến khi nước sốt sánh mịn bóng bẩy.',
      'Bày bào ngư và nấm ra giữa đĩa cải thìa, rưới đều lớp nước sốt bóng lộng lẫy lên trên.'
    ],
    chefTip: 'Chần cải thìa với vài giọt dầu ăn giúp lá rau bóng xanh mướt giữ nguyên độ giòn ngon.'
  },
  {
    id: 'nuong-mo-hanh',
    name: 'Bào Ngư Nướng Mỡ Hành Béo Bùi',
    tag: 'TIỆC CUỐI TUẦN',
    tagBg: 'bg-tertiary-fixed text-tertiary',
    desc: 'Hương thơm quyến rũ từ mỡ hành phi, đậu phộng rang giòn rụm kết hợp cùng vị ngọt đậm của hải sản biển cả trên than hồng.',
    time: '15 phút',
    highlight: 'Hương thơm quyến rũ',
    icon: 'outdoor_grill',
    image: ASSETS.nuongMoHanh,
    prepTime: '5 phút',
    difficulty: 'Rất dễ',
    servings: '3-4 người',
    ingredients: [
      '6-8 con bào ngư kèm vỏ',
      '1 bó hành lá cắt nhỏ',
      'Mỡ heo hoặc dầu ăn ngon',
      'Đậu phộng (lạc) rang vàng giã dập',
      'Hành phi giòn, muối ớt chanh ăn kèm'
    ],
    steps: [
      'Rã đông bào ngư, dùng bàn chải nhỏ cọ sạch mép vỏ và thân bào ngư, tách nhẹ thịt ra rồi đặt lại trên vỏ.',
      'Đun dầu nóng già, trút vào bát hành lá đã nêm chút muối và bột ngọt để làm mỡ hành thơm ngát.',
      'Xếp bào ngư lên vỉ nướng (bếp than hoa, nồi chiên không dầu hoặc lò nướng ở 190°C trong 6-8 phút).',
      'Khi bào ngư vừa chín tới, múc từng muỗng mỡ hành rưới đẫm lên thịt bào ngư, rắc đậu phộng rang và hành phi.',
      'Chấm cùng muối ớt tiêu chanh hoặc nước mắm chua ngọt ăn nóng ngay.'
    ],
    chefTip: 'Nướng ở nhiệt độ cao trong thời gian ngắn để bào ngư không bị teo và giữ nguyên nước cốt ngọt thơm.'
  },
  {
    id: 'sup-hai-san',
    name: 'Súp Bào Ngư Nấm Đông Cô',
    tag: 'MÓN KHAI VỊ',
    tagBg: 'bg-primary-fixed text-primary',
    desc: 'Vị ngọt thanh khiết từ nước hầm thảo mộc và hải sản tươi, món khai vị lý tưởng làm ấm bụng và cung cấp năng lượng tức thì.',
    time: '30 phút',
    highlight: 'Thanh mát, sang trọng',
    icon: 'ramen_dining',
    image: ASSETS.supHaiSan,
    prepTime: '15 phút',
    difficulty: 'Dễ',
    servings: '4 người',
    ingredients: [
      '4 con bào ngư thái lát mỏng',
      'Nấm đông cô, nấm tuyết ngâm nở',
      'Trứng gà đánh tan tạo vân',
      'Bột năng tạo độ sánh',
      'Rau mùi, tiêu sọ, dầu mè thơm'
    ],
    steps: [
      'Nấu sôi nước dùng gà thanh ngọt, cho nấm đông cô thái sợi vào đun sôi 10 phút.',
      'Cho lát bào ngư vào nồi súp, nêm hạt nêm và muối vừa ăn.',
      'Khuấy nước bột năng hòa tan rưới từ từ vào nồi đến độ sánh ưng ý.',
      'Hạ nhỏ lửa, rót trứng qua rây tạo vân mây đẹp mắt.',
      'Rắc ngò rí thái nhỏ, vài giọt dầu mè và tiêu xay thơm nức mũi.'
    ]
  },
  {
    id: 'ham-nam',
    name: 'Bào Ngư Hầm Nấm & Thảo Dược',
    tag: 'PHỤC HỒI THỂ LỰC',
    tagBg: 'bg-secondary-fixed text-secondary',
    desc: 'Được ninh kỹ cùng kỷ tử, táo đỏ và nấm quý, món ăn mang lại sự sảng khoái và tái tạo sinh lực nhanh chóng.',
    time: '45 phút',
    highlight: 'Cực kỳ bồi bổ sức khỏe',
    icon: 'spa',
    image: ASSETS.hamNam,
    prepTime: '15 phút',
    difficulty: 'Dễ',
    servings: '2-3 người',
    ingredients: [
      '4 con bào ngư Golden Food',
      'Táo đỏ Hàn Quốc, kỷ tử đỏ',
      'Nấm đông cô, nấm đùi gà',
      'Gừng lát, nước xương gà hầm trong'
    ],
    steps: [
      'Rửa sạch nguyên liệu thảo mộc.',
      'Cho nước dùng xương gà cùng táo đỏ, nấm và gừng vào thố tiềm trong 30 phút.',
      'Cho bào ngư vào tiềm thêm 15 phút để thịt thấm vị ngọt thảo mộc mà vẫn giữ độ giòn sần sật.',
      'Nêm gia vị thanh đạm, thưởng thức khi còn nóng.'
    ]
  },
  {
    id: 'tiem-thanh-mat',
    name: 'Bào Ngư Tiềm Thanh Mát Mùa Hè',
    tag: 'THANH NHIỆT',
    tagBg: 'bg-tertiary-fixed text-tertiary',
    desc: 'Sự kết hợp tinh tế giữa củ sen giòn, hạt sen bùi và bào ngư giòn ngọt giúp thanh nhiệt cơ thể và an giấc ngon hơn.',
    time: '40 phút',
    highlight: 'Mát lành, giải nhiệt',
    icon: 'eco',
    image: ASSETS.tiemThanhMat,
    prepTime: '15 phút',
    difficulty: 'Dễ',
    servings: '3-4 người',
    ingredients: [
      '4-5 con bào ngư',
      'Hạt sen tươi thông tâm',
      'Củ sen cắt lát tròn mỏng',
      'Cà rốt tỉa hoa, hành lá, ngò'
    ],
    steps: [
      'Hạt sen và củ sen hầm mềm vừa phải cùng nước súp trong.',
      'Cho bào ngư đã làm sạch vào nấu sôi nhẹ 8-10 phút.',
      'Nêm nếm gia vị vừa miệng, thêm cà rốt tạo màu sắc hài hòa.',
      'Múc ra tô sứ trắng, thưởng thức hương vị mát lành tự nhiên.'
    ]
  }
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Chị Mai Lan',
    avatar: 'ML',
    avatarBg: 'bg-primary-container text-white',
    location: 'Quận 7, TP.HCM',
    packagePurchased: 'Combo 2KG Bào Ngư',
    comment: 'Đặt chiều tối hôm trước mà sáng sớm hôm sau shipper đã giao tận cửa. Bào ngư đóng thùng xốp đá khô lạnh buốt, size đồng đều 16 con/kg chuẩn xác. Tối nấu cháo cho 2 bé ăn mà thích mê, thịt giòn ngọt không hề bị bở chút nào!',
    rating: 5
  },
  {
    id: '2',
    name: 'Anh Hoàng Nam',
    avatar: 'HN',
    avatarBg: 'bg-secondary text-white',
    location: 'Cầu Giấy, Hà Nội',
    packagePurchased: 'Combo 2KG Bào Ngư',
    comment: 'Mua làm tiệc nướng BBQ với bạn bè cuối tuần ai cũng tấm tắc khen. Sốt mỡ hành lên thơm nức mũi, thịt dày cắn ngập răng. Giá 900k/2kg rẻ hơn ăn ngoài nhà hàng rất nhiều mà chất lượng chuẩn 5 sao.',
    rating: 5
  },
  {
    id: '3',
    name: 'Bác Thanh Bình',
    avatar: 'TB',
    avatarBg: 'bg-tertiary-container text-white',
    location: 'Hải Châu, Đà Nẵng',
    packagePurchased: 'Gói 1KG Bào Ngư',
    comment: 'Tôi mua về hầm gà và táo đỏ tẩm bổ sau đợt ốm dậy. Thịt bào ngư tươi ngon, vị ngọt tự nhiên rất đậm đà. Nhân viên tư vấn nhiệt tình, hướng dẫn cách sơ chế rất cặn kẽ.',
    rating: 5
  },
  {
    id: '4',
    name: 'Chị Thu Thảo',
    avatar: 'TT',
    avatarBg: 'bg-primary text-white',
    location: 'Bình Thạnh, TP.HCM',
    packagePurchased: 'Combo 2KG Bào Ngư',
    comment: 'Lần thứ 3 đặt hàng của Golden Food rồi. Vẫn giữ vững phong độ, bao bì sạch sẽ hút chân không từng con tiện lợi. Mỗi lần nấu chỉ cần lấy đúng số lượng ra rã đông 10 phút là xong.',
    rating: 5
  },
  {
    id: '5',
    name: 'Anh Quốc Tuấn',
    avatar: 'QT',
    avatarBg: 'bg-secondary-container text-white',
    location: 'Biên Hòa, Đồng Nai',
    packagePurchased: 'Combo 2KG Bào Ngư',
    comment: 'Giao hàng siêu tốc! 2kg được hơn 30 con bào ngư mập ú. Làm món sốt dầu hào ăn kèm cải thìa ngon y chang nhà hàng dimsum. Chắc chắn sẽ ủng hộ shop dài lâu.',
    rating: 5
  },
  {
    id: '6',
    name: 'Chị Minh Nguyệt',
    avatar: 'MN',
    avatarBg: 'bg-tertiary text-white',
    location: 'Thanh Xuân, Hà Nội',
    packagePurchased: 'Gói 1KG Bào Ngư',
    comment: 'Bào ngư tươi ngon, không có mùi tanh nồng. Đóng gói rất chuyên nghiệp với đá gel giữ nhiệt cẩn thận. Cả nhà mình rất ưng ý!',
    rating: 5
  }
];

export const FAQS: FAQItem[] = [
  {
    id: 1,
    question: 'Bào ngư đông lạnh bảo quản được bao lâu?',
    answer: 'Sản phẩm được cấp đông sâu ở nhiệt độ tiêu chuẩn -40°C ngay khi vừa đánh bắt. Khi bảo quản tại ngăn đông tủ lạnh gia đình (-18°C), bào ngư có hạn sử dụng lên đến 12 tháng mà vẫn giữ trọn vẹn vị ngọt và dưỡng chất tự nhiên.'
  },
  {
    id: 2,
    question: 'Cách rã đông bào ngư đúng chuẩn để không mất chất?',
    answer: 'Cách tốt nhất là chuyển bào ngư từ ngăn đông xuống ngăn mát tủ lạnh trước 4-6 tiếng, hoặc ngâm túi hút chân không nguyên bao bì vào nước lạnh khoảng 15-20 phút. Tránh rã đông bằng lò vi sóng nhiệt độ cao làm chín tái thịt bào ngư.'
  },
  {
    id: 3,
    question: 'Thời gian giao hàng mất bao lâu?',
    answer: 'Khu vực nội thành TP.HCM và Hà Nội: Giao hỏa tốc trong vòng 2-4 giờ bằng thùng xốp ướp đá chuyên dụng. Các tỉnh thành khác: Giao xe đông lạnh hoặc chuyển phát hỏa tốc giữ nhiệt trong vòng 24 - 48 giờ.'
  },
  {
    id: 4,
    question: 'Tôi có được kiểm tra hàng trước khi thanh toán không?',
    answer: 'Hoàn toàn ĐƯỢC! Quý khách được quyền mở thùng xốp kiểm tra hàng hóa cùng nhân viên giao nhận trước khi thanh toán. Nếu hàng không đúng size, bị rã đông hay hư hỏng, quý khách có quyền từ chối nhận và Golden Food sẽ đổi mới 100% miễn phí.'
  },
  {
    id: 5,
    question: '1KG bào ngư gồm bao nhiêu con?',
    answer: 'Quy cách chuẩn xuất khẩu của Golden Food là size đồng đều 16 con/kg. Vỏ sạch, thịt đầy đặn, không độn đá vụn hay vụn nước.'
  }
];
