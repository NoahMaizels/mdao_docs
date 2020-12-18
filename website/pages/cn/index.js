/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');
const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;
 

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = (props) => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = (props) => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = (props) => (
      <h2 className="projectTitle">
        {props.title}
        <small>{props.tagline}</small>
      </h2>
    );

    const PromoSection = (props) => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = (props) => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <Logo img_src={`${baseUrl}img/lotus_pose.svg`} />
        <div className="inner">
          <ProjectTitle tagline={siteConfig.tagline} title={siteConfig.title} />
          <PromoSection>
            <Button href={docUrl('developers-intro.html')}>For Developers</Button>
            <Button href={docUrl('users-intro.html')}>For Users</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const langPart = `${language ? `${language}/` : ''}`;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const docUrl = (doc) => `${baseUrl}${docsPart}${langPart}${doc}`;

    const Block = (props) => (
 
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

     
   
 
    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: `MANTRA DAO offers a powerful and easy to use interface for accessing [lending](${docUrl('doc2.html')}), [borrowing](${docUrl('doc1.html')}), and other DeFi opportunities across multiple blockchains`,
            image: `${baseUrl}img/undraw_react.svg`,
            imageAlign: 'top',
            title: 'Universal DeFi Portal',
          },
          {
            content: `Participate in governance by voting, staking, and delegating for multiple blockchains through MANTRA DAO's unified interface`,
            image: `${baseUrl}img/undraw_operating_system.svg`,
            imageAlign: 'top',
            title: 'A Single Interface for All Chains',
          },
        ]}
      </Block>
    );

   

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
      <div className="mainContainer">
          <Features />
           {/* <FeatureCallout />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />  */}
        </div>  
      </div>
    );
  }
}

module.exports = Index;
