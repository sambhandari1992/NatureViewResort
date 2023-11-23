interface Section1 {
    div1: {
        h1: string;
        p: string;
    };
    div2: {
        img: string;
    };
}

interface Section2 {
    box1: {
        h1: string;
    };
    box2: {
        div1: {
            video: {
                src: string;
                type: string;
                fallbackText: string;
            };
        };
        div2: {
            p: string;
        };
    };
}

interface Section3 {
    container: {
        child1: {
            span1: string;
            span2: string;
        };
        child2: {
            span1: string;
            span2: string;
        };
        child3: {
            span1: string;
            span2: string;
        };
    };
}

interface Section4 {
    container: {
        box1: {
            child1: {
                h1: string;
            };
        };
        box2: {
            child1: {
                matCard: {
                    img: {
                        src: string;
                        alt: string;
                    };
                    header: {
                        title: string;
                        subtitle: string;
                    };
                };
            };
            // ... Repeat this structure for each team member
        };
    };
}

interface Section5 {
    container: {
        h1: string;
        p: string;
        button: {
            routerLink: string;
            text: string;
        };
    };
}

interface Section6 {
    h1: string;
    p: string;
    container: {
        child1: {
            matCard: {
                icon: string;
                title: string;
                p: string;
            };
        };
        child2: {
            matCard: {
                icon: string;
                title: string;
                p: string;
            };
        };
        // ... Repeat this structure for each core value
    };
}

// Main interface for the entire JSON structure

export interface MainData {
    main: {
        section1: Section1;
        section2: Section2;
        section3: Section3;
        section4: Section4;
        section5: Section5;
        section6: Section6;
    };
}
