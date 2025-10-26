// GSAP timeline for card animation
let tl = gsap.timeline();

tl.from(".card", {
    stagger: 0.2,
    opacity: 0,
    x: -20,
});

tl.from(".avatar img", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".user-online-indicator", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".profile-name", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".profile-role", {
    stagger: 0.2,
    opacity: 0,
    y: 20,
});

tl.from(".social-buttons", {
    stagger: 0.2,
    opacity: 0,
});