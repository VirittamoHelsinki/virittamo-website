import type { Schema, Attribute } from '@strapi/strapi';

export interface AddressAddress extends Schema.Component {
  collectionName: 'components_address_addresses';
  info: {
    displayName: 'address';
    icon: 'scissors';
  };
  attributes: {
    company_name: Attribute.String & Attribute.Required;
    spot: Attribute.String & Attribute.Required;
    address: Attribute.String & Attribute.Required;
    po_box: Attribute.String & Attribute.Required;
  };
}

export interface CarouselCarousel extends Schema.Component {
  collectionName: 'components_carousel_carousels';
  info: {
    displayName: 'carousel';
    icon: 'plane';
  };
  attributes: {
    carousel_image: Attribute.Media;
  };
}

export interface ContactInfoContactInfo extends Schema.Component {
  collectionName: 'components_contact_info_contact_infos';
  info: {
    displayName: 'contact-info';
    icon: 'user';
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    head: Attribute.String & Attribute.Required;
    phone_number: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface ContentWhy extends Schema.Component {
  collectionName: 'components_why_whies';
  info: {
    displayName: 'content';
    icon: 'alien';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media;
    why_list: Attribute.Component<'list.list', true>;
  };
}

export interface ImageListImageList extends Schema.Component {
  collectionName: 'components_image_list_image_lists';
  info: {
    displayName: 'image_list';
    icon: 'car';
  };
  attributes: {
    image_list_item: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
    icon: 'collapse';
    description: '';
  };
  attributes: {
    list_item: Attribute.Text & Attribute.Required;
  };
}

export interface TextListTextList extends Schema.Component {
  collectionName: 'components_text_list_text_lists';
  info: {
    displayName: 'text-list';
    icon: 'file';
  };
  attributes: {
    text_title: Attribute.String;
    text_decription: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'address.address': AddressAddress;
      'carousel.carousel': CarouselCarousel;
      'contact-info.contact-info': ContactInfoContactInfo;
      'content.why': ContentWhy;
      'image-list.image-list': ImageListImageList;
      'list.list': ListList;
      'text-list.text-list': TextListTextList;
    }
  }
}
