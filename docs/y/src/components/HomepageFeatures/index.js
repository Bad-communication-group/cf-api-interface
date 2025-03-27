import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
{
  title: '应用场景',
  Svg: require('@site/static/img/building_bridge_icon_263716.svg').default,
  description: (
    <>
这些API可以广泛应用于教育类应用、个人网站、移动应用和企业应用等多个场景。无论是用于化学学习、知识科普，还是展示企业文化、团队建设，都能满足您的需求。
    </>
  ),
},
{
  title: '核心优势',
  Svg: require('@site/static/img/building_bridge_icon_263716.svg').default,
  description: (
    <>
我们的API采用RESTful设计，使用JSON格式响应，让集成变得简单快捷。作为开源项目，采用MIT许可证，您可以完全自由地使用我们的服务。
    </>
  ),
},
{
  title: '特色功能',
  Svg: require('@site/static/img/building_bridge_icon_263716.svg').default,
  description: (
    <>
在功能方面，我们提供两个特色API：化学方程式API让您能够随机获取化学方程式，支持按编号查询；每日一言API则能为您的应用增添智慧与温度。
    </>
  ),
},
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
