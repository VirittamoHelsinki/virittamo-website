import type { Schema, Attribute } from "@strapi/strapi";

export interface ContactInfoContactInfo extends Schema.Component {
  collectionName: "components_contact_info_contact_infos";
  info: {
    displayName: "contact-info";
    icon: "user";
    description: "";
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    phone_number: Attribute.String & Attribute.Required;
    email: Attribute.Email & Attribute.Required;
  };
}

export interface ContentWhy extends Schema.Component {
  collectionName: "components_why_whies";
  info: {
    displayName: "content";
    icon: "alien";
    description: "";
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    img: Attribute.Media;
    why_list: Attribute.Component<"list.list", true>;
  };
}

export interface ImageListImageList extends Schema.Component {
  collectionName: "components_image_list_image_lists";
  info: {
    displayName: "image_list";
    icon: "car";
  };
  attributes: {
    image_list_item: Attribute.Media;
  };
}

export interface ListList extends Schema.Component {
  collectionName: "components_list_lists";
  info: {
    displayName: "list";
    icon: "collapse";
    description: "";
  };
  attributes: {
    list_item: Attribute.Text & Attribute.Required;
  };
}

export interface SlideSlide extends Schema.Component {
  collectionName: "components_slide_slides";
  info: {
    displayName: "slide";
    icon: "arrowRight";
    description: "";
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    date: Attribute.Date;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface SlidesSlides extends Schema.Component {
  collectionName: "components_slides_slides";
  info: {
    displayName: "slides";
    icon: "eye";
    description: "";
  };
  attributes: {
    project_team: Attribute.String & Attribute.Required;
    call_to_action: Attribute.String;
    project: Attribute.Component<"slide.slide", true>;
  };
}

export interface StoryStory extends Schema.Component {
  collectionName: "components_story_stories";
  info: {
    displayName: "story";
    icon: "book";
  };
  attributes: {
    image: Attribute.Media & Attribute.Required;
    title: Attribute.String & Attribute.Required;
    description: Attribute.Text & Attribute.Required;
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface TextListTextList extends Schema.Component {
  collectionName: "components_text_list_text_lists";
  info: {
    displayName: "text-list";
    icon: "file";
  };
  attributes: {
    text_title: Attribute.String;
    text_decription: Attribute.Text;
  };
}

declare module "@strapi/types" {
  export module Shared {
    export interface Components {
      "contact-info.contact-info": ContactInfoContactInfo;
      "content.why": ContentWhy;
      "image-list.image-list": ImageListImageList;
      "list.list": ListList;
      "slide.slide": SlideSlide;
      "slides.slides": SlidesSlides;
      "story.story": StoryStory;
      "text-list.text-list": TextListTextList;
    }
  }
}
