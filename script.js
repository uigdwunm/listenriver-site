const translations = {
  zh: {
    "meta.title": "听川｜本地生成、翻译字幕",
    "meta.description": "听川在本地自动转录视频语音、翻译字幕并导出 SRT/VTT，无需默认上传你的媒体文件。",
    "aria.siteHeader": "网站页眉",
    "aria.home": "返回听川首页",
    "aria.primaryNav": "主导航",
    "aria.releaseInfo": "当前版本信息",
    "aria.switchLanguage": "Switch to English",
    "brand.name": "听川",
    "brand.subtitle": "本地字幕工作站",
    "nav.features": "产品特点",
    "nav.pipeline": "处理流程",
    "nav.download": "下载",
    "nav.releases": "发布记录",
    "hero.releaseBadge": "字幕生成 · 字幕翻译 · 完全本地处理",
    "hero.eyebrow": "本地 AI 字幕工作站",
    "hero.title": "本地生成、翻译字幕",
    "hero.subtitle": "导入视频或音频，自动识别语音、生成时间轴字幕并翻译为简体中文。媒体和模型默认留在你的电脑上。",
    "hero.download": "下载 Windows x64 版",
    "hero.viewPipeline": "了解字幕能力",
    "hero.unsignedNote": "0.1.1 预览版 · 未签名安装包 · 本地处理",
    "preview.project": "字幕项目：采访视频",
    "preview.local": "本地",
    "preview.videoCaption": "今天我们来聊聊本地字幕。",
    "preview.subtitleTracks": "字幕轨道",
    "preview.sourceJapanese": "原文 · 日语",
    "preview.translationChinese": "译文 · 简体中文",
    "preview.translatedText": "今天我们来聊聊本地字幕。",
    "facts.outputs": "字幕格式",
    "facts.translation": "本地翻译",
    "facts.languagePairs": "日 / 韩 / 英 → 简中",
    "facts.processing": "处理方式",
    "facts.localProcessing": "完全在本地运行",
    "facts.timeline": "时间信息",
    "facts.originalTimeline": "保留原始时间线",
    "features.eyebrow": "核心能力",
    "features.title": "从语音到翻译字幕，一台电脑完成",
    "features.subtitle": "自动识别视频中的语音，生成带时间轴的字幕，并在本地完成翻译与字幕文件导出。",
    "features.localTitle": "自动生成字幕",
    "features.localBody": "从视频或音频中识别语音，保留原始时间信息，并生成可直接使用的 SRT、VTT 字幕文件。",
    "features.artifactTitle": "本地翻译字幕",
    "features.artifactBody": "默认支持日语、韩语和英语字幕翻译为简体中文，同时保留原文、译文与逐段时间轴。",
    "features.projectTitle": "完全本地处理",
    "features.projectBody": "语音识别、字幕翻译和文件生成默认都在你的电脑上运行，媒体文件无需上传到云端。",
    "completed.eyebrow": "公开预览版状态",
    "completed.title": "目前已完成媒体导入与音频提取",
    "completed.body": "当前正式完成的产品步骤会导入媒体、创建项目目录、提取一份全频段 WAV，并支持直接播放或导出。",
    "completed.output": "核心输出",
    "completed.step1": "导入视频或音频媒体",
    "completed.step2": "创建独立项目目录",
    "completed.step3": "写入完整工作音频 original.wav",
    "completed.step4": "写入项目索引 project.json",
    "completed.step5": "播放或导出提取后的 WAV",
    "pipeline.eyebrow": "完整产品流程",
    "pipeline.title": "一条本地流程生成翻译字幕",
    "pipeline.subtitle": "导入媒体后，在本地完成人声处理、语音识别、字幕翻译，并输出源语言与翻译后的 SRT、VTT 文件。",
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
    "downloads.title": "下载听川，开始本地字幕工作",
    "downloads.subtitle": "安装包通过 GitHub Releases 提供。当前版本仍是未签名预览版，请在确认来源后安装。",
    "downloads.latest": "最新版",
    "downloads.earlier": "较早预览版",
    "downloads.version": "版本",
    "downloads.windowsVersion": "0.1.1 预览版",
    "downloads.macVersion": "0.1.0 预览版",
    "downloads.format": "格式",
    "downloads.size": "大小",
    "downloads.architecture": "架构",
    "downloads.windowsNote": "当前公开预览版先提供媒体导入与音频提取；完整字幕能力正在按产品流程交付。安装时可能显示 SmartScreen 提示。",
    "downloads.windowsButton": "下载 Windows 版",
    "downloads.macNote": "未签名版本可能需要在“隐私与安全性”中手动允许打开。",
    "downloads.macButton": "查看 macOS 版本",
    "downloads.checksum": "Windows 0.1.1 SHA-256",
    "footer.tagline": "在本地生成与翻译视频字幕",
    "footer.github": "GitHub 仓库"
  },
  en: {
    "meta.title": "ListenRiver | Generate and Translate Subtitles Locally",
    "meta.description": "ListenRiver transcribes media, translates subtitles, and exports SRT/VTT locally without uploading your media by default.",
    "aria.siteHeader": "Site header",
    "aria.home": "Back to ListenRiver home",
    "aria.primaryNav": "Primary navigation",
    "aria.releaseInfo": "Current release information",
    "aria.switchLanguage": "切换到中文",
    "brand.name": "ListenRiver",
    "brand.subtitle": "Local subtitle workstation",
    "nav.features": "Features",
    "nav.pipeline": "Pipeline",
    "nav.download": "Download",
    "nav.releases": "Releases",
    "hero.releaseBadge": "Subtitle generation · Translation · Fully local",
    "hero.eyebrow": "A local AI subtitle workstation",
    "hero.title": "Generate and translate subtitles locally.",
    "hero.subtitle": "Import video or audio, transcribe speech, create timed subtitles, and translate them into Simplified Chinese—all while keeping media and models on your computer by default.",
    "hero.download": "Download for Windows x64",
    "hero.viewPipeline": "Explore subtitle features",
    "hero.unsignedNote": "0.1.1 preview · Unsigned installer · Local processing",
    "preview.project": "Subtitle project: Interview",
    "preview.local": "Local",
    "preview.videoCaption": "Today we are talking about local subtitles.",
    "preview.subtitleTracks": "Subtitle tracks",
    "preview.sourceJapanese": "Source · Japanese",
    "preview.translationChinese": "Translation · Simplified Chinese",
    "preview.translatedText": "今天我们来聊聊本地字幕。",
    "facts.outputs": "Subtitle formats",
    "facts.translation": "Local translation",
    "facts.languagePairs": "JA / KO / EN → ZH-Hans",
    "facts.processing": "Processing",
    "facts.localProcessing": "Runs fully on-device",
    "facts.timeline": "Timing",
    "facts.originalTimeline": "Original timeline preserved",
    "features.eyebrow": "Core capabilities",
    "features.title": "From speech to translated subtitles on one computer",
    "features.subtitle": "Transcribe speech, create timed subtitles, translate them locally, and export ready-to-use subtitle files.",
    "features.localTitle": "Generate subtitles automatically",
    "features.localBody": "Transcribe video or audio, preserve source timing, and export ready-to-use SRT and VTT subtitle files.",
    "features.artifactTitle": "Translate subtitles locally",
    "features.artifactBody": "Translate Japanese, Korean, and English subtitles into Simplified Chinese while preserving source text, translations, and segment timing.",
    "features.projectTitle": "Fully local processing",
    "features.projectBody": "Speech recognition, subtitle translation, and file generation run on your computer by default, with no media upload required.",
    "completed.eyebrow": "Public preview status",
    "completed.title": "Media import and audio extraction are complete today",
    "completed.body": "The currently completed product flow imports media, creates a project folder, extracts one full-band WAV, and lets you play or export it directly.",
    "completed.output": "Core output",
    "completed.step1": "Import video or audio media",
    "completed.step2": "Create a dedicated project directory",
    "completed.step3": "Write the full-band original.wav",
    "completed.step4": "Write the project index project.json",
    "completed.step5": "Play or export the extracted WAV",
    "pipeline.eyebrow": "Full product pipeline",
    "pipeline.title": "One local workflow for translated subtitles",
    "pipeline.subtitle": "Import media, process vocals, transcribe speech, translate subtitles, and export source and translated SRT/VTT files locally.",
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
    "downloads.title": "Download ListenRiver and start subtitling locally",
    "downloads.subtitle": "Installers are distributed through GitHub Releases. These are still unsigned preview builds, so verify the source before installing.",
    "downloads.latest": "Latest",
    "downloads.earlier": "Earlier preview",
    "downloads.version": "Version",
    "downloads.windowsVersion": "0.1.1 Preview",
    "downloads.macVersion": "0.1.0 Preview",
    "downloads.format": "Format",
    "downloads.size": "Size",
    "downloads.architecture": "Architecture",
    "downloads.windowsNote": "The current public preview begins with media import and audio extraction; the complete subtitle workflow is being delivered along the product pipeline. SmartScreen may appear during installation.",
    "downloads.windowsButton": "Download for Windows",
    "downloads.macNote": "You may need to allow this unsigned preview manually in Privacy & Security.",
    "downloads.macButton": "View macOS release",
    "downloads.checksum": "Windows 0.1.1 SHA-256",
    "footer.tagline": "Generate and translate video subtitles locally",
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
