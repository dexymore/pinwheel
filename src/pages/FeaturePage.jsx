import React from 'react';
import FeatureHero from '../sections/FeaturePageSections/FeatureHero';
import WorkspaceSection from '../sections/FeaturePageSections/WorkspaceSection';
import PaymentsSection from '../sections/FeaturePageSections/PaymentsSection';
import BusinessGrowth from '../sections/FeaturePageSections/BusinessGrowth';
import HelpingSection from '../sections/FeaturePageSections/HelpingSection';

const FeaturePage = () => {
    return (
  <>
  <FeatureHero></FeatureHero>
  <WorkspaceSection></WorkspaceSection>
  <PaymentsSection></PaymentsSection>
  <BusinessGrowth></BusinessGrowth>
  <HelpingSection></HelpingSection>


  </>
    );
};

export default FeaturePage;