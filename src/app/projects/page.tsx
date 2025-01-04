"use client";

const projects = [
  {
    title: "GenTube",
    description: "A cross-platform Android/iOS application built with React Native, enabling users to generate AI-powered videos effortlessly using advanced machine learning models.",
    techStack: ['React Native', 'Flask', 'JavaScript', 'Python', 'MoviePy', 'Expo', 'MongoDB', 'Vercel', 'FFmpeg'],
    link: "https://github.com/Raahim2/GenTube/raw/refs/heads/main/Builds/GenTube.apk",
    githubLink: "https://github.com/Raahim2/GenTube/",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735992544/PROJECTS-DEMO/ul6kdvylvlvywdwjd5ad.mp4",
    thumbnailURL:"https://static.vecteezy.com/system/resources/thumbnails/035/158/342/small_2x/loop-background-neon-retro-wave-80s-style-video.jpg",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "MechaAI",
    description: "MECHA AI is a versatile image and file editing platform built with Flask, React, Vite, Taiwind. It combines tools for transforming  images and seamless file management, providing a user-friendly experience.",
    techStack: ['Flask', 'React', 'Vite', 'Tailwind CSS', 'Machine Learning' , "Open CV" , "YOLO" , "Pandas" , "Numpy" ],
    link: "https://github.com/Raahim2/MechaAI",
    githubLink: "https://github.com/Raahim2/MechaAI",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887048/PROJECTS-DEMO/asdmbxnggtdckzprn8lo.mp4",
    thumbnailURL:"https://cdn.vectorstock.com/i/500p/83/43/abstract-ai-circuit-board-background-technology-vector-51538343.jpg",
    timePeriod: "Sem III",
    type: "web"
  },
  {
    title: "BrightHome",
    description: "BrightHome is a highly functional e-commerce platform designed for Bright Home Furniture. It offers a seamless shopping experience, allowing users to purchase high-quality furniture products",
    techStack: ['Django', 'HTML', 'CSS', 'JavaScript' , "PostgreSQL" , "Python" , "Vercel"],
    link: "https://brighthome.vercel.app",
    githubLink: "https://github.com/Raahim2/BrightHome",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887158/PROJECTS-DEMO/g4vctcdgfrwtbar3jokc.mp4",
    thumbnailURL:"https://t3.ftcdn.net/jpg/05/93/29/50/360_F_593295067_2SvEv1yO5R5JZPtnE4AHAun5js3MrTnp.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Smart Attendance System",
    description: "A web-based attendance management system that utilizes Face Recognition and Object Detection to mark attendance & uses advanced AI technologies to ensure a seamless and secure attendance process.",
    techStack: ['Flask', 'Face Recognition', 'HTML' , 'Tailwind CSS' , 'Python' , 'Object Detection' , 'YOLO' , 'JSON'],
    link: "https://smart-attendance-system-ten.vercel.app/",
    githubLink: "https://github.com/Raahim2/Smart-Attendance-System",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887208/PROJECTS-DEMO/jrjqwy7osdd6vixnk4le.mp4",
    thumbnailURL:"https://thumbs.dreamstime.com/b/woman-hand-writing-attendance-marker-blue-background-professionally-79573891.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Pics AI",
    description: "Pics AI is a React Native mobile app designed to enhance and stylize images using advanced AI-powered machine learning models. The platform allows users to interact with an integrated chatbot",
    techStack: ['React Native', 'Cloudinary', 'Flask', 'ChatBot' , 'Gemini' , 'Javascript' ],
    link: "https://expo.dev/accounts/raahim2/projects/PicsAI/builds/46c9d25b-74c8-4851-a38c-82b4e2114428",
    githubLink: "https://github.com/Raahim2/Pics-AI",
    videoSrc: "",
    thumbnailURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuKGkKjk5iOALbdyZiHxs_tWTvIg4qr0v1A&s",
    timePeriod: "Sem III",
    type: "app"
  },
  {
    title: "File Manager",
    description: "A file management system developed with Flask and Python, designed to manage, organize, and process PDF files with features such as viewing, editing, and organizing.",
    techStack: ['Flask', 'Python', 'PDF Management', 'File System', 'Database Integration'],
    link: "https://file-manager-virid.vercel.app/",
    githubLink: "https://github.com/Raahim2/File-Manager",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887394/PROJECTS-DEMO/qwcsui81axnhlekylufb.mp4",
    thumbnailURL:"https://t3.ftcdn.net/jpg/01/05/85/14/360_F_105851441_gDJSXUgfH54DwX5rfH6Qiq4sHIZ9ogYL.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "FortyFy Web",
    description: "FortyFy Web is a Vulnerability Assessment and Penetration Testing (VAPT) tool developed during the Synergy Hackathon. The tool is designed to help security professionals identify vulnerabilities websites",
    techStack: ['Python', 'Django', 'Python-Nmap', 'Scrapy' , 'Beautiful Soup' , 'Tailwind CSS'],
    link: "https://synergy-matrix-out.vercel.app",
    githubLink: "https://github.com/Raahim2/Synergy_MatrixOut",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887232/PROJECTS-DEMO/hbxk928a0n6jpflt9zkd.mp4",
    thumbnailURL:"https://cdn.vectorstock.com/i/500p/73/71/laptop-with-shield-cyber-security-concept-3d-vector-38107371.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Portfolio",
    description: "A personal portfolio built with TypeScript, Next.js, and Magic UI to showcase skills, projects, and professional achievements with seamless interactivity and responsive design.",
    techStack: ['TypeScript', 'Next.js', 'Magic UI', 'React', 'Tailwind CSS' , 'Acernity UI'],
    link: "/",
    githubLink: "https://github.com/Raahim2/Portfolio",
    videoSrc: "",
    thumbnailURL:"https://static.vecteezy.com/system/resources/previews/011/067/273/non_2x/portfolio-button-portfolio-speech-bubble-portfolio-colorful-web-banner-illustration-vector.jpg",
    timePeriod: "Sem III",
    type: "web"
  },
  {
    title: "Vault-7",
    description: "An Android malware scanner app built with Jetpack Compose and Kotlin, using advanced threat detection algorithms to identify and eliminate malicious files with real-time scanning.",
    techStack: ['Kotlin', 'Jetpack Compose', 'Android SDK', 'Malware Detection', 'Real-time Sync'],
    link: "https://vault-webapp-two.vercel.app/",
    githubLink: "https://github.com/Raahim2/Vault-7",
    videoSrc: "",
    thumbnailURL:"https://e1.pxfuel.com/desktop-wallpaper/370/938/desktop-wallpaper-hacker-codes-hacker-code-thumbnail.jpg",
    timePeriod: "Sem IV",
    type: "app"
  },
  {
    title: "TaskFusion",
    description: "A Streamlit app leveraging various Hugging Face models for AI tasks, including natural language processing, image classification, and recommendation systems, offering powerful AI capabilities.",
    techStack: ['Streamlit', 'Python', 'Hugging Face', 'Transformers', 'Machine Learning', 'NLP'],
    link: "https://taskfusion.streamlit.app/",
    githubLink: "https://github.com/Raahim2/Artificial-intelligence",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887417/PROJECTS-DEMO/jm7chc0bixec93rf8mcl.mp4",
    thumbnailURL:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvbTM3M2JhdGNoNS0wMDQuanBn.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "StatsTube",
    description: "An Android app built with Java and Android Studio, using YouTube API to fetch and display YouTube statistics, including views, subscribers, and video performance analytics.",
    techStack: ['Java', 'Android Studio', 'YouTube API', 'Android SDK', 'Real-time Data'],
    link: "https://github.com/Raahim2/StatsTube/blob/main/app-debug.apk",
    githubLink: "https://github.com/Raahim2/StatsTube",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735916227/PROJECTS-DEMO/fzpepxtaqxzkfrkas595.mp4",
    thumbnailURL:"https://www.vdocipher.com/blog/wp-content/uploads/2023/12/DALL%C2%B7E-2023-12-10-20.21.58-A-creative-and-visually-appealing-featured-image-for-a-blog-about-video-thumbnails-for-various-social-platforms-like-YouTube-Instagram-and-TikTok-s-1024x585.png",
    timePeriod: "Sem II",
    type: "app"
  },
  {
    title: "ExpenseManager",
    description: "An Android application built with Java, designed to help users track and manage their daily expenses with budgeting, income tracking, and expense categorization features.",
    techStack: ['Java', 'Android Studio', 'SQLite', 'YouTube API', 'Expense Tracking'],
    link: "https://github.com/Raahim2/ExpenseManager/blob/main/ExpenseManager.apk",
    githubLink: "https://github.com/Raahim2/ExpenseManager",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735916135/PROJECTS-DEMO/abhgwumhcqpepnlqhb7w.mp4",
    thumbnailURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLK2rtTvnqP7vPtytvhrkqi-OutVImVHcUOw&s",
    timePeriod: "Sem II",
    type: "app"
  },
  {
    title: "ML2WEB",
    description: "An Express.js app that converts machine learning models into a simple web interface using Flask, enabling easy deployment and use of models on a web platform.",
    techStack: ['Express.js', 'Flask', 'Machine Learning', 'Web Development', 'API Integration'],
    link: "https://github.com/Raahim2/ML2WEB",
    githubLink: "https://github.com/Raahim2/ML2WEB",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887576/PROJECTS-DEMO/xpwlw3nsjw2xc8oi5fq8.mp4",
    thumbnailURL:"https://img.freepik.com/free-vector/machine-learning-banner-artificial-intelligence_107791-611.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Django-TextUtils",
    description: "A basic Django project offering essential text utilities such as text conversion to uppercase, lowercase, and other text processing features for web applications.",
    techStack: ['Django', 'Python', 'Text Utilities', 'Web Development', 'HTML', 'CSS'],
    link: "https://text-utils-beta-olive.vercel.app/",
    githubLink: "https://github.com/Raahim2/Django-TextUtils",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887588/PROJECTS-DEMO/ddoczq4kkjcprtgup3pw.mp4",
    thumbnailURL:"https://mrwallpaper.com/images/hd/juventus-text-background-uh38ekj01hl473jj.jpg",
    timePeriod: "Sem I",
    type: "web"
  },
  {
    title: "YOLO-Object-Detection",
    description: "A Flask web app that integrates YOLO (You Only Look Once) object detection model for real-time object recognition and classification, deployed via Flask API.",
    techStack: ['Flask', 'YOLO', 'Python', 'Object Detection', 'Machine Learning', 'TensorFlow'],
    link: "https://yolo-object-detection-gamma.vercel.app/",
    githubLink: "https://github.com/Raahim2/YOLO-Object-Detection",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887612/PROJECTS-DEMO/qtfsccbdzoiwhnezsaak.mp4",
    thumbnailURL:"https://www.shutterstock.com/image-vector/city-street-crossing-through-eyes-260nw-1377458216.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Hackoona-Mattata",
    description: "A Django-based healthcare platform utilizing AI technologies to offer enhanced healthcare services, patient data management, and real-time appointment booking.",
    techStack: ['Django', 'AI', 'Healthcare', 'Machine Learning', 'Python', 'PostgreSQL'],
    link: "https://github.com/Raahim2/Hackoona-Mattata",
    githubLink: "https://github.com/Raahim2/Hackoona-Mattata",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887635/PROJECTS-DEMO/gxasxymvmup4lzgif8wx.mp4",
    thumbnailURL:"https://img.freepik.com/premium-photo/health-care-science-icon-pattern-medical-innovation-concept-background_845786-2255.jpg?semt=ais_hybrid",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Predictive-AI",
    description: "A platform built with Django and XGBoost showcasing predictive AI models for various use cases, including handwritten digit classification, house price prediction, and more.",
    techStack: ['Django', 'XGBoost', 'Python', 'Machine Learning', 'Data Science', 'AI Models'],
    link: "https://predictive-ai.vercel.app",
    githubLink: "https://github.com/Raahim2/Predictive-AI",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887730/PROJECTS-DEMO/utadqg214tvxr4vftfuq.mp4",
    thumbnailURL:"https://cdn.impossibleimages.ai/wp-content/uploads/2023/04/25130515/background-image-generators.jpg",
    timePeriod: "Sem II",
    type: "web"
  },
  {
    title: "Django-Pyplot",
    description: "A Django project to integrate Matplotlib for data visualization and plotting, providing users with interactive charts and graphs for their data analysis tasks.",
    techStack: ['Django', 'Matplotlib', 'Python', 'Data Visualization', 'Web Development', 'Charts'],
    link: "https://django-pyplot.vercel.app",
    githubLink: "https://github.com/Raahim2/Django-Pyplot",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887739/PROJECTS-DEMO/phh8a389j8hqafgyyhqc.mp4",
    thumbnailURL:"https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0YSUyMGFuYWx5c2lzfGVufDB8fDB8fHww",
    timePeriod: "Sem I",
    type: "web"
  },
  {
    title: "Counter Tally Counter App",
    description: "A simple tally counter app built using Android Studio. First Project of Android",
    techStack: ['Java', 'Android Studio' , 'XML'],
    link: "https://github.com/Raahim2/APK-Android/blob/main/Counter/counter.apk",
    githubLink: "https://github.com/Raahim2/APK-Android/tree/main/Counter",
    videoSrc: "",
    thumbnailURL:"https://static.vecteezy.com/system/resources/thumbnails/016/462/942/small_2x/zero-to-nine-cyan-digital-electronic-clock-numbers-set-lcd-led-digit-set-for-the-counter-clock-calculator-mockup-in-flat-style-design-isolated-on-black-background-vector.jpg",
    timePeriod: "SEM I",
    type: "app"
  },
  {
    title: "Password Generator",
    description: "A password generator app for creating secure passwords.",
    techStack: ['Java', 'Android Studio' , 'XML'],
    link: "https://github.com/Raahim2/APK-Android/blob/main/Password%20Generater/Password.apk",
    githubLink: "https://github.com/Raahim2/APK-Android/tree/main/Password%20Generater",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735916089/PROJECTS-DEMO/pufrfzn6klnm0q13yrtn.mp4",
    thumbnailURL:"https://png.pngtree.com/thumb_back/fh260/background/20230620/pngtree-secure-your-personal-data-with-3d-lock-and-password-field-a-image_3650162.jpg",
    timePeriod: "SEM I",
    type: "app"
  },
  {
    title: "PyQuiz",
    description: "A quiz app built with Python, designed to test knowledge on various topics.",
    techStack: ['Python' , 'Java' , 'Android Studio' , 'XML'],
    link: "https://github.com/Raahim2/APK-Android/blob/main/PyQuiz/app-debug.apk",
    githubLink: "https://github.com/Raahim2/APK-Android/tree/main/PyQuiz",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735916107/PROJECTS-DEMO/bdwzktfxifnaiu47pgew.mp4",
    thumbnailURL:"https://i.pinimg.com/736x/d6/70/99/d670990fa86f31233a53a22d7bb2f4bc.jpg",
    timePeriod: "SEM II",
    type: "app"
  },
  {
    title: "Timer App",
    description: "A simple timer app built with Android Studio. Having Feartures of StopWatch",
    techStack: ['Java', 'Android Studio'],
    link: "https://github.com/Raahim2/APK-Android/blob/main/Timer/Timer.apk",
    githubLink: "https://github.com/Raahim2/APK-Android/tree/main/Timer",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735916118/PROJECTS-DEMO/jc9s3bquscuvk8gsic2r.mp4",
    thumbnailURL:"https://media.istockphoto.com/id/1124901295/vector/abstract-futuristic-technology-background-with-digital-number-timer-concept-and-countdown.jpg?s=612x612&w=0&k=20&c=K7RIRAu0TRqIz7ejYnCTbjFBONeBSxUX5e5SyW3Do4U=",
    timePeriod: "SEM I",
    type: "app"
  },
  {
    title: "Calculator Web App",
    description: "A simple calculator app built using HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Calculator/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Calculator",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://t3.ftcdn.net/jpg/05/07/66/60/360_F_507666066_J8zsoPcCnW0uGcEYzoT0RElpHACKxd6e.jpg",
    timePeriod: "12th",
    type: "web"
  },
  {
    title: "Clash Royale Chest Simulator",
    description: "A chest simulator inspired by the Clash Royale game. that stores data in localstorage",
    techStack: ['HTML', 'CSS', 'JavaScript' ],
    link: "https://raahim2.github.io/WebDev.github.io/Clash%20Royale/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Clash%20Royale",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887755/PROJECTS-DEMO/pu37ytlydxweqyn9mzez.mp4",
    thumbnailURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjVtIRjYk5oq54DRoL7cI6ee51gqZ0q74elg&s",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Clock Web App",
    description: "A simple clock app built with HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Clock/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Clock",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://img.pikbest.com/wp/202345/clock-wallpaper-wall-art-with-golden-design_9612196.jpg!sw800",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "CloneStar Bootstrap UI",
    description: "A simple UI clone of Star website using Bootstrap. For CSS practice",
    techStack: ['HTML', 'CSS', 'Bootstrap'],
    link: "https://raahim2.github.io/WebDev.github.io/Clonestarp/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Clonestarp",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://img.freepik.com/premium-photo/bootstrap-5-blue-background-3d-render_582637-307.jpg",
    timePeriod: "12th",
    type: "web"
  },
  {
    title: "Guess What Game",
    description: "A guessing game built using HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Guss%20what/pract.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Guss%20what",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://motionarray.imgix.net/1967640-oH6JklTSez-high_0005.jpg?w=660&q=60&fit=max&auto=format",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "KBC UI",
    description: "A simple UI for the KBC game with some logic implemented.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/KBC/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/KBC",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQKTguS2pNHecODVM6pr5VQniqyBaHGi7dQ&s",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Landing Page",
    description: "A brand landing page built with HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Landing%20page/BrandX.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Landing%20page",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://img.freepik.com/free-vector/overlapping-forms-wallpaper_23-2148652537.jpg",
    timePeriod: "12th",
    type: "web"
  },
  {
    title: "Miner Game",
    description: "A simple miner game built with HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Miner/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Miner",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887755/PROJECTS-DEMO/pu37ytlydxweqyn9mzez.mp4",
    thumbnailURL:"https://media.istockphoto.com/id/1449010610/vector/mine-tunnel-inside-view-cave-with-railway-rocks.jpg?s=612x612&w=0&k=20&c=nxDqDH9Uuhzjgr5F6TPU6Qm4BA0gB0nX8RCwr9c4XbM=",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Old Portfolio",
    description: "An old portfolio built with HTML and CSS. This is the Updated One",
    techStack: ['HTML', 'CSS'],
    link: "https://raahim2.github.io/WebDev.github.io/Portfolio/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Portfolio",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://img.freepik.com/free-vector/gradient-geometric-design-dark-background_23-2148425667.jpg?semt=ais_hybrid",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Quote Generator",
    description: "A simple quote generator app built with HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Quote/FCC-1%20quote.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Quote",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://piktochart.com/wp-content/uploads/2023/05/large-157.jpg",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Temperature Converter",
    description: "A temperature converter app built with HTML, CSS, and JavaScript.",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/Temperature%20Converter/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/Temperature%20Converter",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887756/PROJECTS-DEMO/j7cmmhtsrbhdwbwe3p7t.mp4",
    thumbnailURL:"https://media.istockphoto.com/id/1306625811/vector/climat-change-and-control-sun-and-snowflake.jpg?s=612x612&w=0&k=20&c=FuWSd7UflzY8K46Rzdhao7lEW7fLq5XSqh3AHsRHhVw=",
    timePeriod: "SEM I",
    type: "web"
  },
  {
    title: "Game Zone",
    description: "A Game Zone Web built with HTML, CSS, and JavaScript Having gamke like Tic Tac Toe , Snake Game  , Flappy Bird , Rock Paper Sissor",
    techStack: ['HTML', 'CSS', 'JavaScript'],
    link: "https://raahim2.github.io/WebDev.github.io/tic%20tac%20toe/index.html",
    githubLink: "https://github.com/Raahim2/WebDev.github.io/tree/main/tic%20tac%20toe",
    videoSrc: "https://res.cloudinary.com/defyovyob/video/upload/v1735887755/PROJECTS-DEMO/pu37ytlydxweqyn9mzez.mp4",
    thumbnailURL:"https://t4.ftcdn.net/jpg/07/11/21/69/360_F_711216985_K3x4ApoF6ACsJJe5IdPpH4rvD7KjJAfl.jpg",
    timePeriod: "SEM I",
    type: "web"
  }
];

import Navbar from "../Components/NavBar";
import React, { useState } from 'react';
import ProjectCard from "../Components/ProjectCard";
import Slide from '../Components/SlideAnimation';

export default function Home() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'fire' | 'luxury' | 'lightning' | 'hacker'>('light');
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState("all");
  const [filterSemester, setFilterSemester] = useState("all");
  const [filterTech, setFilterTech] = useState("all");

  const themeClasses = {
    light: {
      bg: "from-white to-white",
      color:"black",
    },
    dark: {
      bg: "from-gray-800 via-gray-900 to-black",
      color:"white",
    },
    fire: {
      bg: "from-white via-orange-100 to-white",
      color:"black",
    },
    luxury: {
      bg: "from-white via-yellow-100 to-white",
      color:"black",
    },
    lightning: {
      bg: "from-white via-blue-100 to-white",
      color:"black",
    },
    hacker: {
      bg: "from-green-700 via-green-900 to-green-900 ",
      color:"white",
    },
  };

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesSearch ;
  });

  

  return (
    <div className="w-full h-screen">
      <Navbar theme={theme} setTheme={setTheme} />

      <div>
        <div className={`bg-gradient-to-r p-8 ${themeClasses[theme].bg} flex flex-col items-center`} id='Projects'>

          <div className="flex flex-col items-center mb-8 w-3/4 ">
            <input
              type="text"
              placeholder="Search projects..."
              className="p-2 border rounded mb-4 w-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />


          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mx-auto sm:w-3/4 md:w-3/4 lg:w-3/4 w-full ">
            {filteredProjects.map((project, index) => (
              <Slide key={index}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  techStack={project.techStack}
                  link={project.link}
                  githubLink={project.githubLink}
                  videoSrc={project.videoSrc}
                  timePeriod={project.timePeriod}
                  projectType={project.type}
                  thumbnailURL={project.thumbnailURL}
                />
              </Slide>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
