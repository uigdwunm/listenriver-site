const translations = {
  zh: {
    "meta.title": "听川｜本地音视频处理工作站",
    "meta.description": "听川是一款本地音视频处理工作站，以清晰的处理步骤和可检查的项目产物，帮助你从媒体文件一路处理到字幕。",
    "aria.siteHeader": "网站页眉",
    "aria.home": "返回听川首页",
    "aria.primaryNav": "主导航",
    "aria.releaseInfo": "当前版本信息",
    "aria.switchLanguage": "Switch to English",
    "brand.name": "听川",
    "brand.subtitle": "本地工作站",
    "nav.features": "产品特点",
    "nav.pipeline": "处理流程",
    "nav.download": "下载",
    "nav.releases": "发布记录",
    "hero.releaseBadge": "Windows x64 0.1.1 预览版现已提供",
    "hero.eyebrow": "本地优先的音视频工作站",
    "hero.title": "让每一步处理<br /><em>都看得见。</em>",
    "hero.subtitle": "从导入媒体、提取音频，到后续的人声、转录、翻译和字幕工作；每一步都有明确状态和可长期保留的项目产物。",
    "hero.download": "下载 Windows x64 版",
    "hero.viewPipeline": "查看完整流程",
    "hero.unsignedNote": "0.1.1 预览版 · 未签名安装包 · 本地处理",
    "preview.project": "项目：采访素材",
    "preview.local": "本地",
    "preview.originalAudio": "原始音频",
    "preview.artifacts": "项目产物",
    "facts.currentVersion": "当前版本",
    "facts.versionValue": "0.1.1 预览版",
    "facts.latestPlatform": "最新平台",
    "facts.processing": "处理方式",
    "facts.localProcessing": "默认本地处理",
    "facts.artifacts": "产物管理",
    "facts.projectDirectory": "独立项目目录",
    "features.eyebrow": "为什么选择听川",
    "features.title": "处理过程不再是黑盒",
    "features.subtitle": "围绕本地处理、可检查产物和项目化管理设计，让长流程工作更可靠，也更容易继续。",
    "features.localTitle": "默认在本机处理",
    "features.localBody": "媒体文件和项目产物默认留在你的电脑上。只有在明确选择云端处理后，才会上传必要的数据。",
    "features.artifactTitle": "每一步都有产物",
    "features.artifactBody": "音频、时间线、转录和字幕都保存在明确的步骤目录中，可以检查、播放、导出和复用。",
    "features.projectTitle": "以项目目录管理",
    "features.projectBody": "每个媒体文件对应一个独立项目。处理状态、工具版本和产物来源都记录在项目索引中。",
    "completed.eyebrow": "当前已实现",
    "completed.title": "从媒体导入到完整工作音频",
    "completed.body": "当前正式完成的产品步骤会导入媒体、创建项目目录、提取一份全频段 WAV，并支持直接播放或导出。",
    "completed.output": "核心输出",
    "completed.step1": "导入视频或音频媒体",
    "completed.step2": "创建独立项目目录",
    "completed.step3": "写入完整工作音频 original.wav",
    "completed.step4": "写入项目索引 project.json",
    "completed.step5": "播放或导出提取后的 WAV",
    "pipeline.eyebrow": "完整产品流程",
    "pipeline.title": "从媒体文件到双语字幕",
    "pipeline.subtitle": "七个明确步骤沿用原始时间线。前两步已经完成，后续人声、转录、翻译和字幕步骤按产品流程继续建设。",
    "pipeline.step1Title": "导入视频或媒体",
    "pipeline.step1Body": "创建项目目录和项目索引。",
    "pipeline.step2Title": "提取音频",
    "pipeline.step2Body": "生成全频段工作音频 <code>original.wav</code>。",
    "pipeline.step3Title": "提取人声",
    "pipeline.step3Body": "定位候选语音区域并生成分段人声产物。",
    "pipeline.step4Title": "增强并降噪人声",
    "pipeline.step4Body": "清理人声片段，同时保留原始时间线映射。",
    "pipeline.step5Title": "转录语音",
    "pipeline.step5Body": "生成供后续字幕处理使用的结构化转录文件。",
    "pipeline.step6Title": "翻译字幕",
    "pipeline.step6Body": "在保留原文和时间信息的同时写入逐段翻译。",
    "pipeline.step7Title": "生成字幕",
    "pipeline.step7Body": "输出源语言和翻译后的 SRT、VTT 字幕文件。",
    "status.done": "已完成",
    "status.pending": "待实现",
    "boundaries.eyebrow": "能力边界",
    "boundaries.title": "对混合音轨保持诚实",
    "boundaries.voiceTitle": "提取人声不等于锁定一个人",
    "boundaries.voiceBody": "背景中的说话声仍然属于人声，可能保留在提取结果中。当前流程不负责分离重叠说话者。",
    "boundaries.qualityTitle": "单条混合音轨无法保证完美分离",
    "boundaries.qualityBody": "多人重叠、音乐、混响、风噪和重压缩都会影响结果，因此不会承诺不现实的完美分离。",
    "downloads.eyebrow": "下载桌面应用",
    "downloads.title": "选择你的平台",
    "downloads.subtitle": "安装包通过 GitHub Releases 提供。当前版本仍是未签名预览版，请在确认来源后安装。",
    "downloads.latest": "最新版",
    "downloads.earlier": "较早预览版",
    "downloads.version": "版本",
    "downloads.windowsVersion": "0.1.1 预览版",
    "downloads.macVersion": "0.1.0 预览版",
    "downloads.format": "格式",
    "downloads.size": "大小",
    "downloads.architecture": "架构",
    "downloads.windowsNote": "安装时 Windows 可能显示 Microsoft Defender SmartScreen 提示。",
    "downloads.windowsButton": "下载 Windows 版",
    "downloads.macNote": "未签名版本可能需要在“隐私与安全性”中手动允许打开。",
    "downloads.macButton": "查看 macOS 版本",
    "downloads.checksum": "Windows 0.1.1 SHA-256",
    "footer.tagline": "让音视频处理过程清晰可见",
    "footer.github": "GitHub 仓库"
  },
  en: {
    "meta.title": "ListenRiver | Local Audio & Video Workstation",
    "meta.description": "ListenRiver is a local audio and video workstation that turns media into subtitles through explicit processing steps and inspectable project artifacts.",
    "aria.siteHeader": "Site header",
    "aria.home": "Back to ListenRiver home",
    "aria.primaryNav": "Primary navigation",
    "aria.releaseInfo": "Current release information",
    "aria.switchLanguage": "切换到中文",
    "brand.name": "ListenRiver",
    "brand.subtitle": "Local workstation",
    "nav.features": "Features",
    "nav.pipeline": "Pipeline",
    "nav.download": "Download",
    "nav.releases": "Releases",
    "hero.releaseBadge": "Windows x64 0.1.1 preview is now available",
    "hero.eyebrow": "A local-first audio and video workstation",
    "hero.title": "Make every step<br /><em>visible.</em>",
    "hero.subtitle": "Move from media import and audio extraction toward vocals, transcription, translation, and subtitles—with clear status and durable project artifacts at every step.",
    "hero.download": "Download for Windows x64",
    "hero.viewPipeline": "Explore the pipeline",
    "hero.unsignedNote": "0.1.1 preview · Unsigned installer · Local processing",
    "preview.project": "Project: Interview footage",
    "preview.local": "Local",
    "preview.originalAudio": "Original audio",
    "preview.artifacts": "Project artifacts",
    "facts.currentVersion": "Current version",
    "facts.versionValue": "0.1.1 Preview",
    "facts.latestPlatform": "Latest platform",
    "facts.processing": "Processing",
    "facts.localProcessing": "Local by default",
    "facts.artifacts": "Artifact management",
    "facts.projectDirectory": "Dedicated project folders",
    "features.eyebrow": "Why ListenRiver",
    "features.title": "Processing without the black box",
    "features.subtitle": "Designed around local processing, inspectable artifacts, and project-based organization so long workflows stay reliable and resumable.",
    "features.localTitle": "Local by default",
    "features.localBody": "Media and project artifacts stay on your computer by default. Necessary data is uploaded only after you explicitly choose cloud processing.",
    "features.artifactTitle": "Artifacts at every step",
    "features.artifactBody": "Audio, timelines, transcripts, and subtitles live in explicit step folders where they can be inspected, played, exported, and reused.",
    "features.projectTitle": "Organized by project",
    "features.projectBody": "Each media file becomes a dedicated project. Processing status, tool versions, and artifact lineage are recorded in the project index.",
    "completed.eyebrow": "Implemented now",
    "completed.title": "From media import to full-band working audio",
    "completed.body": "The currently completed product flow imports media, creates a project folder, extracts one full-band WAV, and lets you play or export it directly.",
    "completed.output": "Core output",
    "completed.step1": "Import video or audio media",
    "completed.step2": "Create a dedicated project directory",
    "completed.step3": "Write the full-band original.wav",
    "completed.step4": "Write the project index project.json",
    "completed.step5": "Play or export the extracted WAV",
    "pipeline.eyebrow": "Full product pipeline",
    "pipeline.title": "From media to bilingual subtitles",
    "pipeline.subtitle": "Seven explicit steps preserve the original timeline. The first two are complete; vocals, transcription, translation, and subtitle work remain on the product path.",
    "pipeline.step1Title": "Import video or media",
    "pipeline.step1Body": "Create the project directory and project index.",
    "pipeline.step2Title": "Extract audio",
    "pipeline.step2Body": "Produce the full-band working audio <code>original.wav</code>.",
    "pipeline.step3Title": "Extract vocals",
    "pipeline.step3Body": "Find candidate speech regions and produce segment-level vocal artifacts.",
    "pipeline.step4Title": "Enhance and denoise vocals",
    "pipeline.step4Body": "Clean vocal segments while preserving their original timeline mapping.",
    "pipeline.step5Title": "Transcribe speech",
    "pipeline.step5Body": "Create structured transcript files for downstream subtitle work.",
    "pipeline.step6Title": "Translate subtitles",
    "pipeline.step6Body": "Add segment translations while preserving source text and timing.",
    "pipeline.step7Title": "Generate subtitles",
    "pipeline.step7Body": "Export source and translated SRT and VTT subtitle files.",
    "status.done": "Done",
    "status.pending": "Pending",
    "boundaries.eyebrow": "Product boundaries",
    "boundaries.title": "Honest about mixed audio",
    "boundaries.voiceTitle": "Vocal extraction does not isolate one person",
    "boundaries.voiceBody": "Background speech is still speech and may remain in the result. The current pipeline does not separate overlapping speakers.",
    "boundaries.qualityTitle": "One mixed track cannot guarantee perfect separation",
    "boundaries.qualityBody": "Overlapping voices, music, reverb, wind, and heavy compression all affect results, so ListenRiver does not promise unrealistic perfection.",
    "downloads.eyebrow": "Download the desktop app",
    "downloads.title": "Choose your platform",
    "downloads.subtitle": "Installers are distributed through GitHub Releases. These are still unsigned preview builds, so verify the source before installing.",
    "downloads.latest": "Latest",
    "downloads.earlier": "Earlier preview",
    "downloads.version": "Version",
    "downloads.windowsVersion": "0.1.1 Preview",
    "downloads.macVersion": "0.1.0 Preview",
    "downloads.format": "Format",
    "downloads.size": "Size",
    "downloads.architecture": "Architecture",
    "downloads.windowsNote": "Microsoft Defender SmartScreen may appear while installing this unsigned preview.",
    "downloads.windowsButton": "Download for Windows",
    "downloads.macNote": "You may need to allow this unsigned preview manually in Privacy & Security.",
    "downloads.macButton": "View macOS release",
    "downloads.checksum": "Windows 0.1.1 SHA-256",
    "footer.tagline": "Make audio and video processing visible",
    "footer.github": "GitHub repository"
  }
};

const languageToggle = document.querySelector("[data-language-toggle]");
const languageLabel = document.querySelector("[data-language-label]");
const descriptionMeta = document.querySelector('meta[name="description"]');

function applyLanguage(language) {
  const dictionary = translations[language];

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = dictionary["meta.title"];
  descriptionMeta?.setAttribute("content", dictionary["meta.description"]);

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) element.textContent = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-html]").forEach((element) => {
    const key = element.dataset.i18nHtml;
    if (dictionary[key]) element.innerHTML = dictionary[key];
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    if (dictionary[key]) element.setAttribute("aria-label", dictionary[key]);
  });

  if (languageToggle && languageLabel) {
    languageLabel.textContent = language === "zh" ? "EN" : "中文";
    languageToggle.setAttribute("aria-label", dictionary["aria.switchLanguage"]);
  }

  window.localStorage.setItem("listenriver.language", language);
}

const storedLanguage = window.localStorage.getItem("listenriver.language");
const initialLanguage = storedLanguage === "zh" || storedLanguage === "en"
  ? storedLanguage
  : window.navigator.language.toLowerCase().startsWith("zh") ? "zh" : "en";

applyLanguage(initialLanguage);

languageToggle?.addEventListener("click", () => {
  const nextLanguage = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  applyLanguage(nextLanguage);
});
