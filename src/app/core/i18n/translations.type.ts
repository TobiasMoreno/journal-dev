export interface Translations {
  nav: {
    posts: string;
    now: string;
    about: string;
  };
  footer: {
    role: string;
  };
  home: {
    hero: {
      titleLine1: string;
      titleLine2: string;
      sub: string;
    };
    posts: {
      heading: string;
      loading: string;
      error: string;
      allPosts: string;
    };
  };
  postList: {
    title: string;
    sub: string;
    loading: string;
    error: string;
  };
  postDetail: {
    back: string;
    loading: string;
    error: string;
    noContent: string;
    notFound: string;
    viewLinkedIn: string;
  };
  about: {
    title: string;
    sub: string;
    identity: {
      heading: string;
      p1before: string;
      p1after: string;
      p2: string;
    };
    howIWork: {
      heading: string;
      card1title: string;
      card1body: string;
      card2title: string;
      card2body: string;
      card3title: string;
      card3body: string;
      card4title: string;
      card4body: string;
    };
    stack: {
      heading: string;
      languages: string;
      backend: string;
      infra: string;
      data: string;
      tools: string;
    };
    path: {
      heading: string;
      body: string;
    };
    fit: {
      heading: string;
      goodFitLead: string;
      goodFit: string[];
      badFitLead: string;
      badFit: string[];
    };
  };
  now: {
    title: string;
    updated: string;
    learning: {
      heading: string;
      items: string[];
    };
    building: {
      heading: string;
      items: string[];
    };
    reading: {
      heading: string;
      items: string[];
    };
  };
}
