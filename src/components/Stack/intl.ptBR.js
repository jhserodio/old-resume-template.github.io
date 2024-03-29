import { SKILLS } from '../../constants/skills';
import { STACK } from '../../constants/stack';

const { OTHER_SKILLS, FRONTEND, BACKEND } = SKILLS;

const stack_ptBR = {
  title: 'Stack',
  return: 'return [',
  closeArray: ']',
  closeObj: '}',
  [OTHER_SKILLS]: {
    title: 'knowledges( developer ) {',
    [STACK[OTHER_SKILLS].AWS]: 'AWS Amazon Web Service',
    [STACK[OTHER_SKILLS].AWS_CLOUDFORMATION]: 'AWS Cloudformation',
    [STACK[OTHER_SKILLS].AWS_API_GATEWAY]: 'AWS API Gateway',
    [STACK[OTHER_SKILLS].AWS_AMPLIFY]: 'AWS Amplify',
    [STACK[OTHER_SKILLS].AWS_CLOUDFRONT]: 'AWS Cloudfront',
    [STACK[OTHER_SKILLS].AWS_COGNITO]: 'AWS Cognito',
    [STACK[OTHER_SKILLS].AWS_ROUTE53]: 'AWS Route53',
    [STACK[OTHER_SKILLS].AWS_LAMBDA]: 'AWS Lambda',
    [STACK[OTHER_SKILLS].AWS_EC2]: 'AWS EC2',
    [STACK[OTHER_SKILLS].AWS_S3]: 'AWS S3',
    [STACK[OTHER_SKILLS].AWS_EVENT_BRIDGE]: 'AWS Event Bridge',
    [STACK[OTHER_SKILLS].DOCKER]: 'Docker',
    [STACK[OTHER_SKILLS].NGINX]: 'NGINX Server',
    [STACK[OTHER_SKILLS].GIT]: 'git',
    [STACK[OTHER_SKILLS].GIT_FLOW]: 'Git Flow',
    [STACK[OTHER_SKILLS].CI_CD]: 'Continuous integration and delivery',
    [STACK[OTHER_SKILLS].CIRCLE_CI]: 'Circle CI',
    [STACK[OTHER_SKILLS].BITBUCKET_PIPELINES]: 'Bitbucket Pipelines',
    [STACK[OTHER_SKILLS].VS_CODE]: 'VSCode',
    [STACK[OTHER_SKILLS].VIM]: 'Vim',
    [STACK[OTHER_SKILLS].ARCH]: 'Arch Linux',
    [STACK[OTHER_SKILLS].JWT]: 'JWT',
    [STACK[OTHER_SKILLS].TDD]: 'TDD (Testing Driven Development)',
    [STACK[OTHER_SKILLS].BDD]: 'BDD (Behavior Driven Development)',
    [STACK[OTHER_SKILLS].DDD]: 'DDD (Domain Driven Design)',
    [STACK[OTHER_SKILLS].NEW_RELIC]: 'New Relic',
    [STACK[OTHER_SKILLS].SENTRY]: 'Sentry',
    [STACK[OTHER_SKILLS].CLOUDWATCH]: 'Cloudwatch',
  },
  [BACKEND]: {
    title: 'knowledges( backend ) {',
    [STACK[BACKEND].SERVERLESS]: 'Serverless',
    [STACK[BACKEND].RUST]: 'Rust',
    [STACK[BACKEND].NODE_JS]: 'NodeJS',
    [STACK[BACKEND].DENO]: 'Deno Typescript Runtimer',
    [STACK[BACKEND].JAVA]: 'Java',
    [STACK[BACKEND].PYTHON]: 'Python',
    [STACK[BACKEND].HASKELL]: 'Haskell',
    [STACK[BACKEND].SEQUELIZE]: 'Sequelize',
    [STACK[BACKEND].POSTGRES]: 'PostgreSQL',
    [STACK[BACKEND].MONGO_DB]: 'MongoDB',
    [STACK[BACKEND].REDIS]: 'Redis',
    [STACK[BACKEND].GRAPHQL]: 'GraphQL',
    [STACK[BACKEND].REST_API]: 'Rest Api',
    [STACK[BACKEND].OOP]: 'Programacao Orientada a Objetos',
    [STACK[BACKEND].MVC]: 'MVC (Model View Controller)',
    [STACK[BACKEND].ORM]: 'ORM (Object Relational Mapper)',
    [STACK[BACKEND].FUNCTIONAL_PROGRAMING]: 'Functional Programing',
    [STACK[BACKEND].APOLLO_SERVER]: 'Apollo Server',
    [STACK[BACKEND].FIREBASE_FUNCTIONS]: 'Firebase Functions',
    [STACK[BACKEND].FIREBASE_REALTIME_DATABASE]: 'Firebase Realtime Database',
    [STACK[BACKEND].FIREBASE_AUTH]: 'Firebase Auth',
    [STACK[BACKEND].FIREBASE_HOSTING]: 'Firebase Hosting',
    [STACK[BACKEND].APACHE_KAFKA]: 'Apache Kafka',
    [STACK[BACKEND].RABBIT_MQ]: 'Rabbit Mq',
    [STACK[BACKEND].NEST_JS]: 'NestJS',
    [STACK[BACKEND].LOOP_BACK]: 'Loopback',
    [STACK[BACKEND].TYPE_ORM]: 'TypeORM',
    [STACK[BACKEND].GOF_DESIG_PATTERS]: 'Gang Of Four Design Patterns',
    [STACK[BACKEND].SOLID]: 'SOLID Principles',
  },
  [FRONTEND]: {
    title: 'knowledges( frontend ) {',
    [STACK[FRONTEND].ES2015]: 'ES2015++',
    [STACK[FRONTEND].HTML]: 'html5',
    [STACK[FRONTEND].CSS]: 'css3',
    [STACK[FRONTEND].POST_CSS]: 'postCSS',
    [STACK[FRONTEND].CSS_MODULES]: 'CSS Modules',
    [STACK[FRONTEND].TYPE_SCRIPT]: 'Typescript',
    [STACK[FRONTEND].ELM]: 'Elm',
    [STACK[FRONTEND].WASM]: 'Web Assembly (WASM)',
    [STACK[FRONTEND].ESLINT]: 'ESLint',
    [STACK[FRONTEND].REACT]: 'ReactJs',
    [STACK[FRONTEND].ANGULAR]: 'Angular',
    [STACK[FRONTEND].ANGULARJS]: 'AngularJS',
    [STACK[FRONTEND].REDUX]: 'Redux',
    [STACK[FRONTEND].WEBPACK]: 'Webpack',
    [STACK[FRONTEND].JEST]: 'Jest',
    [STACK[FRONTEND].NPM]: 'npm',
    [STACK[FRONTEND].YARN]: 'Yarn',
    [STACK[FRONTEND].APOLLO]: 'Apollo Client',
    [STACK[FRONTEND].PWA]: 'Progressive Web Application (PWA)',
    [STACK[FRONTEND].MATERIAL_DESIGN]: 'Material Design',
    [STACK[FRONTEND].WEB_SOCKETS]: 'Web Sockets',
    [STACK[FRONTEND].WEB_WORKERS]: 'Web Workers',
    [STACK[FRONTEND].NEXT_JS]: 'NEXT React Server Side Rendering',
    [STACK[FRONTEND].REDUX_TOOL_KIT]:
      'Redux ToolKit (State manange and data fetch)',
    [STACK[FRONTEND].TESTING_LIBRARY]: 'Testing Library',
    [STACK[FRONTEND].CHROME_EXTENSION]: 'Chrome Extension development',
    [STACK[FRONTEND].FIREFOX_ADDON]: 'Firefox Addon development',
    [STACK[FRONTEND].TURBO_PACK]: 'Turbo pack',
    [STACK[FRONTEND].TURBO_REPO]: 'Turbo Repo',
  },
};

export { stack_ptBR };
