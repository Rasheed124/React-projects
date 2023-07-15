


type Base = {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  _updatedAt: string;
};

interface Post extends Base {
  author: Author;
  body: Block[];
  categories: Category[];
  mainImage: Image;
  slug: Slug;
  title: string;
  description: string;
  relatedPosts: Post[]
}

interface Author extends Base {
  bio: Block[];
  image: Image;
  name: string;
  slug: Slug;
}

interface Image {
  _type: "image";
  asset: Reference;
}

interface Reference {
  _ref: string;
  _type: "reference";
}

interface Slug {
  _type: "slug";
  current: string;
}

interface Block {
  _key: string;
  _type: "block";
  children: Span[];
  markDefs: any[];
  mainImage: Image;
  style: "normal" | "h1" | "h2" | "h3" | "h4" | "h6" | "blockquote";
}

interface Span {
  _key: string;
  _type: "span";
  marks: string[];
  test: string;
}

interface Category extends Base {
  description: string;
  title: string;
}

interface MainImage {
  _type: "image";
  asset: Reference;
}
interface Title {
  _type: "string";
  current: string;
}

// Banner
interface HomeBanner extends Base {
  name: string;
  address: string;
  handleText: string;
  bannerImage: string;
  handle: Slug;
  skills: string;
}

// Skill
interface Skill extends Base {
  description: string;
  title: string;
  image: string;
}
interface Skills extends Base {
  name: string;
  heading: string;
  subHeading: string;
  skillsDetails: Skill[];
}

// Project
interface ProjectContent extends Base {
  title: string;
  image: string;
  url: string;
  video: string;
}
interface Projects extends Base {
  heading: string;
  title: string;
  description: string;
  shortdescription: string;
  slug: Slug;
  url: string;
  skillsTitle: string;
  keyResult: string;
  testimonials: string;
  shareProject: string;
  projectlink: string;
  projectImage: string;
  projectContent: ProjectContent[];
}

// Testimonial
interface Testimonial extends Base {
  title: string;
  description: string;
  author: string;
}

// About
interface Company extends Base {
  title: string;
  image: string;
  url: string;
}

interface About extends Base {
  title: string;
  storyText: string;
  image: string;
  heading: string;
  companys: Company[];
}

// Contact
interface Contact extends Base {
  title: string;
  logo: string;
  text: string;
  mail: string;
  infoText: string;
  form: string;
  socialHandle: string;
  marquee: string;
  heading: string;
}

// Content Writing
interface WritingPost extends Base {
  title: string;
  image: string;
  url: string;
  description: string;
}

interface ContentWriting extends Base {
  title: string;
  subTitle: string;
  writings: WritingPost[];
}

