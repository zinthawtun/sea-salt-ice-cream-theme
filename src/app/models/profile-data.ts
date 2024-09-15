export interface ProfileData {
    name: string;
    bio: string;
    title: string;
    skills: string[];
    socialMedia: SocialMedia;
}

export interface SocialMedia{
    github: string;
    linkedin: string;
    twitter: string;
}