const API_ROOT = 'http://103.156.1.63:1000';

const EVENT_NAMES = {
  TASKS_STATUS: 'tasks-status',
  SYSTEM_SPEC: 'system-spec',
  SYSTEM_USAGE: 'system-usage'
};

const STRUCTURE_TASK = [
  {
    name: 'news_naver_crawler',
    display: 'Naver News Crawler',
    in_data: [
      {
        name: 'recent_days',
        display: 'N days',
        type: 'number',
        value: 1
      },
      {
        name: 'keyword',
        display: 'Keyword',
        type: 'text',
        value: ''
      }
    ],
    out_data: [
      {
        name: 'article_count',
        display: 'Articles',
        type: 'number',
        value: null
      },
      {
        name: 'page_count',
        display: 'Pages',
        type: 'number',
        value: null
      },
      {
        name: 'comment_count',
        display: 'Comments',
        type: 'number',
        value: null
      }
    ],
    actions: ['PLAY', 'STOP', 'DELETE'],
    api: '/v1/news/naver/crawl-all'
  },
  {
    name: 'radio_naver_crawler',
    display: 'Naver Radio Crawler',
    in_data: [
      {
        name: 'recent_days',
        display: 'N days',
        type: 'number',
        value: 1
      }
    ],
    out_data: [],
    actions: ['PLAY', 'STOP', 'DELETE'],
    api: '/v1/naver-radio/crawl-all'
  },
  {
    name: 'radio_podbbang_crawler',
    display: 'Podbbang Radio Crawler',
    in_data: [
      {
        name: 'recent_days',
        display: 'N days',
        type: 'number',
        value: 1
      }
    ],
    out_data: [],
    actions: ['PLAY', 'STOP', 'DELETE'],
    api: '/v1/radio/podbbang/crawl-all'
  },
  {
    name: 'news_naver_article_export',
    display: 'Naver News Articles Export',
    in_data: [
      {
        name: 'keyword',
        display: 'Keyword',
        type: 'text',
        value: ''
      }
    ],
    out_data: [],
    actions: ['PLAY', 'STOP', 'DOWNLOAD', 'DELETE'],
    api: '/v1/news/export-article-csv'
  },
  {
    name: 'news_naver_comment_export',
    display: 'Naver News Comment Export',
    in_data: [
      {
        name: 'keyword',
        display: 'Keyword',
        type: 'text',
        value: ''
      }
    ],
    out_data: [],
    actions: ['PLAY', 'STOP', 'DOWNLOAD', 'DELETE'],
    api: '/v1/news/export-comment-csv'
  }
];

const COLOR_STATUS = {
  WAITING: '#5a959a',
  DONE: '#50CB93',
  ERROR: '#ff3333',
  CANCEL: '#A19882',
  MISSED: '#362222',
  IDLE: '#444941',
  PROCESS: '#F43B86'
};

const FAKE_NAME = 'admin';
const FAKE_PASSWORD = '123abc456';

const FAKE_ACCOUNT = {
  photoURL: '/static/avatars/avatar_default.jpg',
  displayName: 'Nguyễn Hải Đăng',
  email: 'hada.nguyen309@gmail.com'
};

export {
  API_ROOT,
  EVENT_NAMES,
  STRUCTURE_TASK,
  FAKE_NAME,
  FAKE_PASSWORD,
  FAKE_ACCOUNT,
  COLOR_STATUS
};
