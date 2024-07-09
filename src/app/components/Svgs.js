import dynamic from 'next/dynamic';


const ReactIcon = dynamic(() => import('./svg/ReactIcon'));
const JavaIcon = dynamic(() => import('./svg/JavaIcon'));
const JavascriptIcon = dynamic(() => import('./svg/JavascriptIcon'));
const AWSIcon = dynamic(() => import('./svg/AWSIcon'));
const BlockchainIcon = dynamic(() => import('./svg/BlockchainIcon'));
const UIUXicon = dynamic(() => import('./svg/UIUXicon'));
const PythonIcon = dynamic(() => import('./svg/PythonIcon'));
const AIMLIcon = dynamic(() => import('./svg/AIMLIcon'));
const DevopsEngineerIcon = dynamic(() => import('./svg/DevopsEngineerIcon'));
const QATestEngineerIcon = dynamic(() => import('./svg/QATestEngineerIcon'));
const StaffAugmentionService = dynamic(() => import('./svg/StaffAugmentionService'));
const UpRightArrowIcon = dynamic(() => import('./svg/UpRightArrowIcon'));
const WeAreHiring = dynamic(() => import('./svg/WeAreHiring'));
const MultipleUserIcon = dynamic(() => import('./svg/MultipleUserIcon'));
const FIleIcon = dynamic(() => import('./svg/FIleIcon'));
const CodeClanderIcon = dynamic(() => import('./svg/CodeClanderIcon'));
const DeliverBoxIcon = dynamic(() => import('./svg/DeliverBoxIcon'));
const LaptopMobileIcon = dynamic(() => import('./svg/LaptopMobileIcon'));
const AgileDevelopmentIcon = dynamic(() => import('./svg/AgileDevelopmentIcon'));
const NetworkUserIcon = dynamic(() => import('./svg/NetworkUserIcon'));
const NetworkTowerIcon = dynamic(() => import('./svg/NetworkTowerIcon'));
const HandSettingIcon = dynamic(() => import('./svg/HandSettingIcon'));
const StrategicVisonIcon = dynamic(() => import( './svg/StrategicVisonIcon'));
const ProjectManagerIcon = dynamic(() => import( './svg/ProjectManagerIcon'));
const ClockIcon = dynamic(() => import('./svg/ClockIcon'));
const MultipleClock = dynamic(() => import('./svg/MultipleClock'));
const SettingHandIcon = dynamic(() => import('./svg/SettingHandIcon'));
const ThumbIcon = dynamic(() => import('./svg/ThumbIcon'));




const Svgs = ({ name }) => {
  switch (name) {
    case "react-icon":
      return (
       <ReactIcon/>
      );

    case "java-icon":
      return (
        <JavaIcon/>
      );

    case "javascript-icon":
      return (
      <JavascriptIcon/>
      );

    case "aws-icon":
      return (
      <AWSIcon/>
      );

    case "blockchain-icon":
      return (
       <BlockchainIcon/>
      );

    case "ui-ux-icon":
      return (
      <UIUXicon/>
      );

    case "python-icon":
      return (
     <PythonIcon/>
      );

    case "cardiogram-icon":
      return (
       <CardiogramIcon/>
      );

    case "ai-ml-icon":
      return (
        <AIMLIcon/>
      );

    case "project-manager-icon":
      return (
      <ProjectManagerIcon/>
      );

    case "devops-engineer-icon":
      return (
      <DevopsEngineerIcon/>
      );
    case "qa-test-engineer-icon":
      return (
      <QATestEngineerIcon/>
      );

    case "staff-augmentation-service":
      return (
   <StaffAugmentionService/>
      );

    case "up-right-arrow":
      return (
       <UpRightArrowIcon/>
      );

    case "we-are-hiring":
      return (
      <WeAreHiring/>
      );

    case "multiple-user":
      return (
      <MultipleUserIcon/>
      );

    case "file":
      return (
       <FIleIcon/>
      );

    case "clock":
      return (
      <ClockIcon/>
      );

    case "multiple-clock":
      return (
      <MultipleClock/>
      );

    case "code-calender":
      return (
      <CodeClanderIcon/>
      );

    case "delivery-box":
      return (
      <DeliverBoxIcon/>
      );

    case "laptop-mobile":
      return (
    <LaptopMobileIcon/>
      );

    case "setting-hand":
      return (
      <SettingHandIcon/>
      );

    case "agile-development":
      return (
      <AgileDevelopmentIcon/>
      );

    case "thumbs":
      return (
     <ThumbIcon/>
      );

    case "network-user":
      return (
    <NetworkUserIcon/>
      );

    case "network-tower":
      return (
   <NetworkTowerIcon/>
      );

    case "hand-setting":
      return (
      <HandSettingIcon/>
      );

    case "strategic-vision":
      return (
       <StrategicVisonIcon/>
      );

    default:
      break;
  }
};

export default Svgs;
