

type Base = {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
}


interface Post extends Base {
    author: Author;
    Body: Block[];
    categories: Category[];
    mainImage: Image;
    slug: Slug;
    title: string;
    description: string;
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
    style: "normal" | "h1" | "h2" | "h3" | "h4" | "blockquote";
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
    name: string
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
    name: string
    heading: string;
    subHeading: string;
    skillsDetails: Skill[];

}


// Project
interface ProjectContent extends Base {
    title: string;
    image: string;
    url: string
}
interface Projects extends Base {
    heading: string;
    title: string;
    description: string
    shortdescription: string
    slug: string;
    url: string;
    skillsTitle: string
    keyResult: string
    testimonials:  string
    shareProject: string
    projectlink: string
    projectContent : ProjectContent[]

}



// Testimonial
interface Testimonial extends Base {
    title: string;
    description: string;
    author: string
}



