export const headerPageName = {
  mycar: '내 차 만들기',
  archiving: '아카이빙',
  mychiving: '마이카이빙',
};
export const myCarPagePath = [
  'trim/model',
  'trim/engine',
  'trim/bodytype',
  'trim/wheeldrive',
  'color',
  'option/selection',
  'option/accessories',
  'option/performance',
  'complete',
];

export const BASIC_SERVER_URL = 'http://www.hyundaimycar.store:8080';

export const USER_CAR_ACTIONS = {
  MODEL: 'trim',
  ENGINE: 'engine',
  BODY: 'bodyType',
  WHEEL: 'wheelDrive',
  EXCOLOR: 'outerColor',
  INCOLOR: 'innerColor',
  SELECT: 'selectedOptions',
  ADD_SELECT: 'addSelect',
  REMOVE_SELECT: 'removeSelect',
};

export const MYCAR = {
  TRIM: {
    URL: 'cars/1/trim',
    FILED: {
      MODEL: 'trimInfoDTOs',
      ENGINE: 'engineInfoDTOs',
      BODY: 'bodyInfoDTOs',
      WHEEL: 'driveInfoDTOs',
    },
  },
  COLOR: {
    URL: 'trims/1/color',
    FILED: {
      INCOLOR: 'inColors',
      EXCOLOR: 'exColors',
      TAGS: {
        inColors: 'inColorTagInfoDTOS',
        exColors: 'exColorTagInfoDTOS',
      },
      IMG: {
        inColors: 'in_image',
        exColors: 'rotation_image',
      },
    },
  },
  SELECTED: {
    URL: 'model/option?trim_id=1&body_id=1&engine_id=1&drive_id=1',
    FILED: {
      SELECT: 'extraOptionInfoSortedDTOs',
      BASIC: 'defaultOptionInfoDTOs',
      TAGS: 'extraOptionTagInfoDTOS',
    },
  },
};

export const ARCHIVINGDETAIL = {
  SELECTEDCAR: {
    URL: 'reviews/',
    FILED: {
      PRICE: 'price',
      COMMENT: 'comment',
      TRIM: 'trim_name',
      ENGINE: 'engine_name',
      DRIVE: 'drive_name',
      BODY: 'body_name',
      INCOLOR: 'interior_color_name',
      EXCOLOR: 'exterior_color_name',
      DATE: 'created_at',
      EXTRAOPTIONS: 'extraOptionForCarReviewDTOs',
      IMG: {},
    },
  },
};

export const navCategoryName = {
  trim: {
    id: '트림',
    value: {
      model: '모델',
      engine: '엔진',
      bodytype: '바디타입',
      wheeldrive: '구동방식',
    },
  },
  color: {
    id: '색상',
    value: {
      outer: '외장 색상',
      inner: '내장 색상',
    },
  },
  option: {
    id: '옵션',
    value: {
      selection: '상세 품목',
      accessories: 'H Genuine Accessories',
      performance: 'N Performance',
    },
  },
  complete: {
    id: '완성',
    value: {},
  },
};

export const logoTextInfo = [
  {
    name: 'leblanc',
    value: [
      ['20인치', '알로이 휠'],
      ['서라운드 뷰', '모니터'],
      ['클러스터(12.3', '인치 컬러 LCD)'],
    ],
  },
  {
    name: 'exclusive',
    value: [
      ['12.3인치', '내비게이션'],
      ['내비게이션', '스마트 컨트롤'],
      ['베젤리스', '인사이드 미러'],
    ],
  },
  {
    name: 'prestige',
    value: [
      ['2열 수동식', '도어 커튼'],
      ['스마트', '자세제어'],
      ['전후석 통합', '터치 컨트롤'],
    ],
  },
  {
    name: 'calligraphy',
    value: [
      ['KRELL', '프리미엄 사운드'],
      ['원격 스마트', '주차보조'],
      ['캘리그래피', '전용 디자인'],
    ],
  },
];

export const PALISADE_URL = {
  catalogue:
    'https://www.hyundai.com/contents/repn-car/catalog/palisade-catalog.pdf',
  price:
    'https://www.hyundai.com/contents/repn-car/catalog/palisade-2024-price.pdf',
};

export const ArchivingTabMenu = ['전체', '구매', '시승'];

export const ARCHIVING = {
  URL: {
    OPTIONS: 'cars/1/option-names',
    REVIEW: 'cars/1/car-review',
    ISPURCHASED: 'cars/1/car-review/',
    DETAIL: 'reviews/1/car-review',
  },
  FILED: {
    OPTIONS: 'extraOptionNameDTOs',
    REVIEW: 'carReviewOverviewDTOs',
  },
  NO_ITEM: {
    NO_REVIEW: ' 후기가 존재하지 않습니다',
    NO_SELECT: '옵션칩을 선택해주세요',
  },
};
