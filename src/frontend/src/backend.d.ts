import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    name: string;
    email: string;
    message: string;
}
export type Post = {
    __kind__: "scholarship";
    scholarship: PostType;
} | {
    __kind__: "examNotification";
    examNotification: PostType;
} | {
    __kind__: "result";
    result: PostType;
} | {
    __kind__: "educationNews";
    educationNews: PostType;
} | {
    __kind__: "generalInfo";
    generalInfo: PostType;
} | {
    __kind__: "stateScheme";
    stateScheme: PostType;
} | {
    __kind__: "admitCard";
    admitCard: PostType;
};
export interface PostType {
    id: string;
    title: string;
    stateTags: Array<string>;
    body: string;
    published: boolean;
    lastUpdatedAt: bigint;
    imageUrl: string;
    excerpt: string;
}
export interface IngestionSource {
    id: string;
    url: string;
    imageRule: string;
}
export interface BrandImage {
    url: string;
    thumbnail: string;
    color: string;
    lastUpdated: bigint;
}
export interface UserProfile {
    name: string;
}
export enum UserRole {
    admin = "admin",
    user = "user",
    guest = "guest"
}
export interface backendInterface {
    addIngestionSource(source: IngestionSource): Promise<void>;
    assignCallerUserRole(user: Principal, role: UserRole): Promise<void>;
    autoPublishScheduledContent(): Promise<void>;
    getAllSubmissions(): Promise<Array<ContactSubmission>>;
    getBrandImage(): Promise<BrandImage | null>;
    getCallerUserProfile(): Promise<UserProfile | null>;
    getCallerUserRole(): Promise<UserRole>;
    getIngestionSources(): Promise<Array<IngestionSource>>;
    getPostById(id: string): Promise<Post | null>;
    getPublishedPostsByCategory(arg0: string): Promise<Array<Post>>;
    getUserProfile(user: Principal): Promise<UserProfile | null>;
    isCallerAdmin(): Promise<boolean>;
    manualIngestContent(title: string, category: string, body: string, excerpt: string, stateTags: Array<string>): Promise<void>;
    removeIngestionSource(id: string): Promise<void>;
    saveCallerUserProfile(profile: UserProfile): Promise<void>;
    submitContactForm(name: string, email: string, message: string): Promise<void>;
    triggerAutomatedIngestion(): Promise<void>;
    updateBrandImage(image: BrandImage): Promise<void>;
}
