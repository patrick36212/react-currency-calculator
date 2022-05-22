const particlesConfig = {
    background: {
        color: {
            value: "#90B8F8",
        },
    },
    fpsLimit: 60,
    interactivity: {
        events: {
            onHover: {
                enable: true,
                mode: "grab",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                duration: 0.4,
            },
        },
    },
    particles: {
        color: {
            value: "#26282B",
        },
        links: {
            color: "#353941",
            distance: 130,
            enable: true,
            opacity: 0.5,
            width: 1,
        },
        move: {
            direction: "none",
            enable: true,
            speed: 2,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 130,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 5 },
        },
    },
    detectRetina: true,
}

export default particlesConfig;