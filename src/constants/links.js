import { SKILLS } from './skills';
import { STACK } from './stack';
import { ME } from './me';
import { LTDA } from './ltda';

const { FRONTEND, BACKEND, OTHER_SKILLS } = SKILLS;

const LINKS = Object.freeze({
  [LTDA.SELF]: Object.freeze({
    [LTDA.VNATOR]: 'https://www.vnator.com',
    [LTDA.AGROTIS]: 'https://www.agrotis.com.br',
    [LTDA.NAYP]: 'https://www.nayp.com.br',
    [LTDA.POLVO]: 'https://www.polvo.com.br',
  }),
  [ME.SELF]: Object.freeze({
    [ME.EMAIL]: 'mailto:joao.serodio@vnator.com',
    [ME.GIT_HUB]: 'https://github.com/jhserodio',
    [ME.MEDIUM]: 'https://medium.com/@jhserodio',
    [ME.INSTAGRAM]: 'https://www.instagram.com/jhserodio/',
    [ME.LINKEDIN]: 'https://www.linkedin.com/in/jo%C3%A3o-henrique-serodio-ulbinski/',
    [ME.SHAPED]: 'https://certibanks.com/KnowledgeArea.aspx?articleid=11',
  }),
  [OTHER_SKILLS]: Object.freeze({
    [STACK[OTHER_SKILLS].AWS]: 'https://aws.amazon.com/',
    [STACK[OTHER_SKILLS].AWS_CLOUDFORMATION]:
      'https://aws.amazon.com/pt/cloudformation/',
    [STACK[OTHER_SKILLS].AWS_API_GATEWAY]:
      'https://aws.amazon.com/pt/api-gateway/',
    [STACK[OTHER_SKILLS].AWS_AMPLIFY]: 'https://aws.amazon.com/pt/amplify/',
    [STACK[OTHER_SKILLS].AWS_CLOUDFRONT]:
      'https://aws.amazon.com/pt/cloudfront/',
    [STACK[OTHER_SKILLS].AWS_COGNITO]: 'https://aws.amazon.com/pt/cognito/',
    [STACK[OTHER_SKILLS].AWS_ROUTE53]: 'https://aws.amazon.com/pt/route53/',
    [STACK[OTHER_SKILLS].AWS_LAMBDA]: 'https://aws.amazon.com/pt/lambda/',
    [STACK[OTHER_SKILLS].AWS_EC2]: 'https://aws.amazon.com/pt/ec2/',
    [STACK[OTHER_SKILLS].AWS_S3]: 'https://aws.amazon.com/pt/s3/',
    [STACK[OTHER_SKILLS].DOCKER]: 'https://www.docker.com/',
    [STACK[OTHER_SKILLS].GIT]: 'https://git-scm.com/',
    [STACK[OTHER_SKILLS].GIT_FLOW]:
      'https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow',
    [STACK[OTHER_SKILLS].CIRCLE_CI]: 'https://circleci.com/',
    [STACK[OTHER_SKILLS].BITBUCKET_PIPELINES]:
      'https://bitbucket.org/product/features/pipelines',
    [STACK[OTHER_SKILLS].VS_CODE]: 'https://code.visualstudio.com/',
    [STACK[OTHER_SKILLS].EMACS]: 'https://www.gnu.org/software/emacs/',
    [STACK[OTHER_SKILLS].ARCH]: 'https://www.archlinux.org/',
    [STACK[OTHER_SKILLS].JWT]: 'https://jwt.io/',
    [STACK[OTHER_SKILLS].TDD]: 'https://en.wikipedia.org/wiki/Test-driven_development',
    [STACK[OTHER_SKILLS].BDD]: 'https://en.wikipedia.org/wiki/Behavior-driven_development',
    [STACK[OTHER_SKILLS].DDD]: 'https://en.wikipedia.org/wiki/Domain-driven_design',

  }),
  [BACKEND]: Object.freeze({
    [STACK[BACKEND].RUST]: 'https://www.rust-lang.org/',
    [STACK[BACKEND].SERVERLESS]: 'https://serverless.com/',
    [STACK[BACKEND].NODE_JS]: 'https://nodejs.org',
    [STACK[BACKEND].DENO]: 'https://deno.land/',
    [STACK[BACKEND].JAVA]: 'https://www.java.com/',
    [STACK[BACKEND].PYTHON]: 'https://www.python.org/',
    [STACK[BACKEND].HASKELL]: 'https://www.haskell.org/',
    [STACK[BACKEND].SEQUELIZE]: 'https://sequelize.org/',
    [STACK[BACKEND].POSTGRES]: 'https://www.postgresql.org/',
    [STACK[BACKEND].MONGO_DB]: 'https://www.mongodb.com/',
    [STACK[BACKEND].REDIS]: 'https://redis.io/',
    [STACK[BACKEND].GRAPHQL]: 'https://graphql.org/',
    [STACK[BACKEND].APOLLO_SERVER]:
      'https://www.apollographql.com/docs/apollo-server/',
    [STACK[BACKEND].REST_API]: 'https://restfulapi.net/',
    [STACK[BACKEND].MVC]: 'https://wikipedia.org/wiki/MVC',
    [STACK[BACKEND].OOP]:
      'https://en.wikipedia.org/wiki/Object-oriented_programming',
    [STACK[BACKEND].FUNCTIONAL_PROGRAMING]: 'https://en.wikipedia.org/wiki/Functional_programming',
    [STACK[BACKEND].FIREBASE_FUNCTIONS]: 'https://firebase.google.com/products/functions',
    [STACK[BACKEND].FIREBASE_REALTIME_DATABASE]: 'https://firebase.google.com/products/realtime-database',
    [STACK[BACKEND].FIREBASE_AUTH]: 'https://firebase.google.com/products/auth',
    [STACK[BACKEND].FIREBASE_HOSTING]: 'https://firebase.google.com/products/hosting',
    [STACK[BACKEND].APACHE_KAFKA]: 'https://kafka.apache.org/',
    [STACK[BACKEND].RABBIT_MQ]: 'https://www.rabbitmq.com/getstarted.html',
  }),
  [FRONTEND]: Object.freeze({
    [STACK[FRONTEND].ES2015]:
      'https://www.ecma-international.org/publications/standards/Ecma-262.htm',
    [STACK[FRONTEND].HTML]: 'https://developer.mozilla.org/pt-BR/docs/Web/HTML',
    [STACK[FRONTEND].CSS]: 'https://developer.mozilla.org/pt-BR/docs/Web/CSS',
    [STACK[FRONTEND].POST_CSS]: 'https://postcss.org/',
    [STACK[FRONTEND].CSS_MODULES]: 'https://github.com/css-modules/css-modules',
    [STACK[FRONTEND].TYPE_SCRIPT]: 'https://www.typescriptlang.org/',
    [STACK[FRONTEND].ELM]: 'https://elm-lang.org/',
    [STACK[FRONTEND].WASM]: 'https://webassembly.org/',
    [STACK[FRONTEND].ESLINT]: 'https://eslint.org/',
    [STACK[FRONTEND].REACT]: 'https://pt-br.reactjs.org/',
    [STACK[FRONTEND].NEXT_JS]: 'https://nextjs.org/',
    [STACK[FRONTEND].REDUX]: 'https://redux.js.org/',
    [STACK[FRONTEND].WEBPACK]: 'https://webpack.js.org/',
    [STACK[FRONTEND].JEST]: 'https://jestjs.io/',
    [STACK[FRONTEND].NPM]: 'https://www.npmjs.com/',
    [STACK[FRONTEND].YARN]: 'https://yarnpkg.com',
    [STACK[FRONTEND].APOLLO]: 'https://www.apollographql.com/docs/react/',
    [STACK[FRONTEND].PWA]: 'https://developers.google.com/web/progressive-web-apps/',
    [STACK[FRONTEND].MATERIAL_DESIGN]: 'https://mui.com',
    [STACK[FRONTEND].WEB_WORKERS]: 'https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API',
    [STACK[FRONTEND].WEB_SOCKETS]: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API',
  }),
});

export { LINKS };
