// Event names as constants to prevent typos
export const GA_EVENTS = {
    // Project events
    VIEW_PROJECT: "view_project",
    PROJECT_HOVER: "project_hover",
    PROJECT_CLICK_TITLE: "project_click_title",
    PROJECT_CLICK_IMAGE: "project_click_image",

    // Social events
    SOCIAL_CLICK: "social_click",

    // Existing events
    DOWNLOAD_CV: "download_cv",
    GENERATE_LEAD: "generate_lead",
} as const;

// Types for event parameters
export interface ProjectEventParams {
    project_id: number;
    project_name: string;
    project_category: string;
    project_position: number;
    interaction_type: "view" | "hover" | "click_title" | "click_image";
    project_link?: string;
}

export interface SocialEventParams {
    platform: "github" | "linkedin";
    url: string;
}

// Generic event tracking function
export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", eventName, params);
    }
};

// Helper function for project events
export const trackProjectEvent = (
    eventType: "view" | "hover" | "click_title" | "click_image",
    project: {
        id: number;
        name: string;
        category: string;
        link?: string;
    },
    position: number
) => {
    const eventMap = {
        view: GA_EVENTS.VIEW_PROJECT,
        hover: GA_EVENTS.PROJECT_HOVER,
        click_title: GA_EVENTS.PROJECT_CLICK_TITLE,
        click_image: GA_EVENTS.PROJECT_CLICK_IMAGE,
    };

    const params: ProjectEventParams = {
        project_id: project.id,
        project_name: project.name,
        project_category: project.category,
        project_position: position,
        interaction_type: eventType,
        ...(project.link && { project_link: project.link }),
    };

    trackEvent(eventMap[eventType], params);
};

// Helper function for social events
export const trackSocialClick = (platform: "github" | "linkedin", url: string) => {
    const params: SocialEventParams = {
        platform,
        url,
    };

    trackEvent(GA_EVENTS.SOCIAL_CLICK, params);
};
