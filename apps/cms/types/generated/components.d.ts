import type { Schema, Attribute } from '@strapi/strapi';

export interface AccordionAccordion extends Schema.Component {
  collectionName: 'components_accordion_accordions';
  info: {
    displayName: 'team-accordion';
    icon: 'arrowDown';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    button: Attribute.Component<'button.action-button'>;
    marquee: Attribute.Component<'list.list', true>;
  };
}

export interface AccordionBenefitAccordion extends Schema.Component {
  collectionName: 'components_accordion_benefit_accordions';
  info: {
    displayName: 'benefit-accordion';
  };
  attributes: {
    name: Attribute.String;
    benefits: Attribute.Component<'list.benefit-list', true>;
  };
}

export interface AccordionCriterionAccordion extends Schema.Component {
  collectionName: 'components_accordion_criterion_accordions';
  info: {
    displayName: 'criterion-accordion';
  };
  attributes: {
    name: Attribute.String;
    heading: Attribute.String;
    criterionList: Attribute.Component<'list.generic-list', true>;
    note: Attribute.Text;
  };
}

export interface ButtonActionButton extends Schema.Component {
  collectionName: 'components_button_action_buttons';
  info: {
    displayName: 'action-button';
  };
  attributes: {
    name: Attribute.String;
    title: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
  };
}

export interface ButtonButton extends Schema.Component {
  collectionName: 'components_button_buttons';
  info: {
    displayName: 'generic-button';
    icon: 'cursor';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    action: Attribute.String;
  };
}

export interface ListBenefitList extends Schema.Component {
  collectionName: 'components_list_benefit_lists';
  info: {
    displayName: 'benefit-list';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    link: Attribute.String;
    linkName: Attribute.String;
  };
}

export interface ListContactList extends Schema.Component {
  collectionName: 'components_list_contact_lists';
  info: {
    displayName: 'contact-list';
  };
  attributes: {
    img: Attribute.Media;
    name: Attribute.String;
    title: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
  };
}

export interface ListGenericList extends Schema.Component {
  collectionName: 'components_list_generic_lists';
  info: {
    displayName: 'generic-list';
  };
  attributes: {
    name: Attribute.String;
    item: Attribute.Component<'list.list', true>;
  };
}

export interface ListImageList extends Schema.Component {
  collectionName: 'components_list_image_lists';
  info: {
    displayName: 'image-list';
  };
  attributes: {
    img: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'text-list';
    description: '';
  };
  attributes: {
    name: Attribute.String;
  };
}

export interface SectionApplySection extends Schema.Component {
  collectionName: 'components_section_apply_sections';
  info: {
    displayName: 'apply-section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionEmployedSection extends Schema.Component {
  collectionName: 'components_section_employed_sections';
  info: {
    displayName: 'employed-section';
  };
  attributes: {
    title: Attribute.String;
    logos: Attribute.Component<'list.image-list', true>;
  };
}

export interface SectionHeroSection extends Schema.Component {
  collectionName: 'components_section_hero_sections';
  info: {
    displayName: 'hero-section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    img: Attribute.Media;
    description: Attribute.Text;
    proofing: Attribute.Component<'button.button', true>;
    ctaButton: Attribute.Component<'button.button'>;
  };
}

export interface SectionProjectSection extends Schema.Component {
  collectionName: 'components_section_project_sections';
  info: {
    displayName: 'project-section';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface SectionProofSection extends Schema.Component {
  collectionName: 'components_section_proof_sections';
  info: {
    displayName: 'wwa-section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    img: Attribute.Media;
  };
}

export interface SectionSection extends Schema.Component {
  collectionName: 'components_section_sections';
  info: {
    displayName: 'partner-section';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    partners: Attribute.Component<'list.image-list', true>;
  };
}

export interface SectionTeamSection extends Schema.Component {
  collectionName: 'components_section_team_sections';
  info: {
    displayName: 'team-section';
  };
  attributes: {
    title: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'accordion.accordion': AccordionAccordion;
      'accordion.benefit-accordion': AccordionBenefitAccordion;
      'accordion.criterion-accordion': AccordionCriterionAccordion;
      'button.action-button': ButtonActionButton;
      'button.button': ButtonButton;
      'list.benefit-list': ListBenefitList;
      'list.contact-list': ListContactList;
      'list.generic-list': ListGenericList;
      'list.image-list': ListImageList;
      'list.list': ListList;
      'section.apply-section': SectionApplySection;
      'section.employed-section': SectionEmployedSection;
      'section.hero-section': SectionHeroSection;
      'section.project-section': SectionProjectSection;
      'section.proof-section': SectionProofSection;
      'section.section': SectionSection;
      'section.team-section': SectionTeamSection;
    }
  }
}
