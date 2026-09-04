document.addEventListener('DOMContentLoaded', () => {
    // =========================================================================
    // 1. DICTIONARIES: ENGLISH, HINDI, BENGALI, GUJARATI, MARATHI
    // =========================================================================
    const I18N = {
        en: {
            langTag: "English",
            gov_banner: "Govt. of India • Bharat Pashudhan",
            registry_live: "Census Portal Active",
            brand_sub: "AI Bovine Breed Triangulation",
            step_nav_lang: "Language",
            step_nav_photo: "Photo",
            step_nav_result: "Diagnosis",
            p1_title: "Select Preferred Language",
            p1_subtitle: "Choose your regional language for field operation",
            btn_next: "Proceed to Photo Upload",
            btn_back: "Back to Language",
            p2_title: "Step 2: Livestock Imagery Ingestion",
            p2_subtitle: "Provide a clear, unobstructed photograph of the cattle or buffalo",
            tab_upload: "📁 Device Storage",
            tab_camera: "📷 Field Camera",
            dropzone_prompt: "Tap to Select Picture",
            dropzone_hint: "JPG, PNG, WEBP supported • Natural daylight recommended",
            btn_snap: "📸 Capture",
            btn_cancel: "Cancel",
            status_ready: "Ready for Identification",
            tip_text: "<b>Field Guideline:</b> Frame the bovine so cranial features, ear curve, and dewlap are clearly discernible.",
            btn_run_diag: "Execute Breed Diagnostic",
            p3_title: "Step 3: Breed Identification Results",
            p3_subtitle: "Top-3 ranked candidates with regional traits & confidence scores",
            loading_title: "Processing Morphological Model...",
            loading_sub: "Triangulating across 41 indigenous & dairy breeds",
            lbl_verified_species: "Verified Primary Species",
            top3_heading: "Top 3 Suggested Breeds (Ranked by Probability)",
            lbl_survey_slip: "Field Verification Slip",
            btn_export: "Download Slip",
            btn_back_upload: "Back / Change Image",
            btn_new_survey: "New Livestock Survey",
            footer_info: "<b>PashuDrishti AI v2.4</b> • National Bovine Taxonomy System • Ministry of Animal Husbandry & Dairying",
            lbl_native: "📍 Native Region:",
            lbl_traits: "👁️ Physical Traits:",
            cow_species: "Cow (Bos indicus / Taurus)",
            buffalo_species: "Buffalo (Bubalus bubalis)",
            purpose_milch: "Milch (Dairy)",
            purpose_draught: "Draught",
            purpose_dual: "Dual-Purpose",
            alert_select_img: "Please upload or capture a photo first before continuing.",
            non_bovine_msg: "Non-bovine or unclear image detected. Please provide a clear photograph of cattle or buffalo."
        },
        hi: {
            langTag: "हिन्दी",
            gov_banner: "भारत सरकार • भारत पशुधन",
            registry_live: "पशु गणना पोर्टल सक्रिय",
            brand_sub: "एआई गोवंशीय नस्ल पहचान प्रणाली",
            step_nav_lang: "भाषा",
            step_nav_photo: "तस्वीर",
            step_nav_result: "पहचान परिणाम",
            p1_title: "अपनी पसंदीदा भाषा चुनें",
            p1_subtitle: "फील्ड संचालन के लिए अपनी प्रादेशिक भाषा का चयन करें",
            btn_next: "फ़ोटो अपलोड के लिए आगे बढ़ें",
            btn_back: "भाषा चयन पर वापस",
            p2_title: "चरण 2: पशु की तस्वीर इनपुट करें",
            p2_subtitle: "गाय या भैंस की स्पष्ट एवं सीधी तस्वीर प्रदान करें",
            tab_upload: "📁 डिवाइस स्टोरेज से",
            tab_camera: "📷 फील्ड कैमरा से",
            dropzone_prompt: "तस्वीर चुनने के लिए टैप करें",
            dropzone_hint: "JPG, PNG, WEBP समर्थित • प्राकृतिक दिन के उजाले की सलाह",
            btn_snap: "📸 फ़ोटो खींचें",
            btn_cancel: "रद्द करें",
            status_ready: "पहचान के लिए तैयार",
            tip_text: "<b>फील्ड दिशानिर्देश:</b> सुनिश्चित करें कि पशु के सींग, कान का झुकाव और गलकंबल स्पष्ट रूप से दिखाई दे रहे हों।",
            btn_run_diag: "नस्ल पहचान की जाँच करें",
            p3_title: "चरण 3: नस्ल पहचान परिणाम",
            p3_subtitle: "सटीक संभावना एवं शारीरिक विशेषताओं के साथ शीर्ष 3 संभावित नस्लें",
            loading_title: "एआई मॉडल विश्लेषण कर रहा है...",
            loading_sub: "41 पंजीकृत भारतीय और विदेशी नस्लों से मिलान जारी",
            lbl_verified_species: "सत्यापित मुख्य प्रजाति",
            top3_heading: "शीर्ष 3 अनुशंसित नस्लें (प्राथमिकता अनुसार)",
            lbl_survey_slip: "डिजिटल सत्यापन पर्ची",
            btn_export: "पर्ची डाउनलोड करें",
            btn_back_upload: "पीछे जाएँ / फ़ोटो बदलें",
            btn_new_survey: "नया पशु सर्वेक्षण",
            footer_info: "<b>पशु-दृष्टि AI v2.4</b> • राष्ट्रीय पशुधन गणना प्रणाली • पशुपालन और डेयरी मंत्रालय",
            lbl_native: "📍 मूल राज्य/क्षेत्र:",
            lbl_traits: "👁️ मुख्य शारीरिक लक्षण:",
            cow_species: "गाय (Bos indicus / Taurus)",
            buffalo_species: "भैंस (Bubalus bubalis)",
            purpose_milch: "दुधारू (Milch)",
            purpose_draught: "भारवाही (Draught)",
            purpose_dual: "द्वि-उद्देशीय (Dual)",
            alert_select_img: "कृपया आगे बढ़ने से पहले एक फ़ोटो अपलोड करें या खींचें।",
            non_bovine_msg: "गैर-गोवंशीय या अस्पष्ट छवि का पता चला। कृपया गाय या भैंस की स्पष्ट तस्वीर प्रदान करें।"
        },
        bn: {
            langTag: "বাংলা",
            gov_banner: "ভারত সরকার • ভারত পশুধন",
            registry_live: "পশুমশুমারি পোর্টাল সক্রিয়",
            brand_sub: "এআই গবাদি পশুর জাত সনাক্তকরণ",
            step_nav_lang: "ভাষা",
            step_nav_photo: "ছবি",
            step_nav_result: "ফলাফল",
            p1_title: "পছন্দের ভাষা নির্বাচন করুন",
            p1_subtitle: "কাজের সুবিধার্থে আপনার আঞ্চলিক ভাষা বেছে নিন",
            btn_next: "ছবি আপলোড করতে এগিয়ে যান",
            btn_back: "ভাষা পরিবর্তনে ফিরুন",
            p2_title: "ধাপ ২: পশুর ছবি আপলোড করুন",
            p2_subtitle: "গরু বা মহিষের একটি পরিষ্কার ও স্পষ্ট ছবি প্রদান করুন",
            tab_upload: "📁 ডিভাইস স্টোরেজ",
            tab_camera: "📷 ফিল্ড ক্যামেরা",
            dropzone_prompt: "ছবি নির্বাচন করতে ট্যাপ করুন",
            dropzone_hint: "JPG, PNG, WEBP সমর্থিত • দিনের আলোয় তোলা ছবি বাঞ্ছনীয়",
            btn_snap: "📸 ছবি তুলুন",
            btn_cancel: "বাতিল করুন",
            status_ready: "সনাক্তকরণের জন্য প্রস্তুত",
            tip_text: "<b>নির্দেশিকা:</b> পশুর শিং, কানের গঠন এবং গলকম্বল যেন স্পষ্টভাবে দৃশ্যমান থাকে।",
            btn_run_diag: "জাত সনাক্তকরণ শুরু করুন",
            p3_title: "ধাপ ৩: জাত সনাক্তকরণের ফলাফল",
            p3_subtitle: "সম্ভাব্যতা ও শারীরিক বৈশিষ্ট্য অনুসারে শীর্ষ ৩টি সম্ভাব্য জাত",
            loading_title: "মডেল বিশ্লেষণ করছে...",
            loading_sub: "৪১টি নিবন্ধিত ভারতীয় ও দুগ্ধজাত জাতের সাথে মিল খোঁজা হচ্ছে",
            lbl_verified_species: "যাচাইকৃত প্রধান প্রজাতি",
            top3_heading: "শীর্ষ ৩টি প্রস্তাবিত জাত (সম্ভাবনা অনুসারে)",
            lbl_survey_slip: "ফিল্ড ভেরিফিকেশন স্লিপ",
            btn_export: "স্লিপ ডাউনলোড করুন",
            btn_back_upload: "পিছনে যান / ছবি পরিবর্তন করুন",
            btn_new_survey: "নতুন পশু জরিপ",
            footer_info: "<b>পশুদৃষ্টি AI v2.4</b> • জাতীয় পশুসম্পদ শুমারি ব্যবস্থা • পশুপালন ও দুগ্ধ বিভাগ",
            lbl_native: "📍 আদি অঞ্চল/রাজ্য:",
            lbl_traits: "👁️ শারীরিক লক্ষণ:",
            cow_species: "গরু (Bos indicus / Taurus)",
            buffalo_species: "মহিষ (Bubalus bubalis)",
            purpose_milch: "দুগ্ধবতী (Milch)",
            purpose_draught: "ভারবাহী (Draught)",
            purpose_dual: "দ্বিমুখী উপযোগী (Dual)",
            alert_select_img: "এগিয়ে যাওয়ার আগে অনুগ্রহ করে একটি ছবি আপলোড করুন বা ক্যামেরা দিয়ে তুলুন।",
            non_bovine_msg: "অস্পষ্ট বা অ-গোজাতীয় ছবি সনাক্ত হয়েছে। অনুগ্রহ করে গরু বা মহিষের পরিষ্কার ছবি দিন।"
        },
        gu: {
            langTag: "ગુજરાતી",
            gov_banner: "ભારત સરકાર • ભારત પશુધન",
            registry_live: "પશુગણતરી પોર્ટલ કાર્યરત",
            brand_sub: "AI પશુ ઓલાદ ઓળખ પ્રણાલી",
            step_nav_lang: "ભાષા",
            step_nav_photo: "તસવીર",
            step_nav_result: "પરિણામ",
            p1_title: "પસંદગીની ભાષા પસંદ કરો",
            p1_subtitle: "ક્ષેત્ર કાર્ય માટે તમારી પ્રાદેશિક ભાષા પસંદ કરો",
            btn_next: "ફોટો અપલોડ કરવા આગળ વધો",
            btn_back: "ભાષા પસંદગી પર પાછા જાઓ",
            p2_title: "પગલું ૨: પશુની તસવીર ઇનપુટ કરો",
            p2_subtitle: "ગાય અથવા ભેંસની સ્પષ્ટ અને ખુલ્લી તસવીર આપો",
            tab_upload: "📁 ડિવાઇસ સ્ટોરેજ",
            tab_camera: "📷 ફિલ્ડ કેમેરા",
            dropzone_prompt: "તસવીર પસંદ કરવા માટે ટેપ કરો",
            dropzone_hint: "JPG, PNG, WEBP સપોર્ટેડ • કુદરતી સૂર્યપ્રકાશમાં લીધેલ ફોટો યોગ્ય",
            btn_snap: "📸 ફોટો લો",
            btn_cancel: "રદ કરો",
            status_ready: "વિશ્લેષણ માટે તૈયાર",
            tip_text: "<b>માર્ગદર્શિકા:</b> પશુના શિંગડા, કાનનો વળાંક અને ગળાની ગડી (dewlap) સ્પષ્ટ દેખાવા જોઈએ.",
            btn_run_diag: "ઓલાદ ઓળખ તપાસો",
            p3_title: "પગલું ૩: ઓલાદ ઓળખ પરિણામો",
            p3_subtitle: "સંભાવના અને શારીરિક લક્ષણો સાથે ટોચની ૩ સંભવિત ઓલાદો",
            loading_title: "AI મોડેલ વિશ્લેષણ કરી રહ્યું છે...",
            loading_sub: "૪૧ નોંધાયેલ ભારતીય અને ડેરી ઓલાદો સાથે મેળ કરી રહ્યું છે",
            lbl_verified_species: "ચકાસાયેલ મુખ્ય પ્રજાતિ",
            top3_heading: "ટોચની ૩ ભલામણ કરેલ ઓલાદો (સંભાવના ક્રમમાં)",
            lbl_survey_slip: "સર્વેક્ષણ પ્રમાણપત્ર સ્લિપ",
            btn_export: "સ્લિપ ડાઉનલોડ કરો",
            btn_back_upload: "પાછળ જાઓ / ફોટો બદલો",
            btn_new_survey: "નવું પશુ સર્વેક્ષણ",
            footer_info: "<b>પશુદ્રષ્ટિ AI v2.4</b> • રાષ્ટ્રીય પશુધન ગણતરી પ્રણાલી • પશુપાલન અને ડેરી મંત્રાલય",
            lbl_native: "📍 મૂળ પ્રદેશ/રાજ્ય:",
            lbl_traits: "👁️ શારીરિક લક્ષણો:",
            cow_species: "ગાય (Bos indicus / Taurus)",
            buffalo_species: "ભેંસ (Bubalus bubalis)",
            purpose_milch: "દૂધાળી (Milch)",
            purpose_draught: "ભારવાહક (Draught)",
            purpose_dual: "દ્વિ-હેતુક (Dual)",
            alert_select_img: "આગળ વધતા પહેલાં કૃપા કરીને ફોટો અપલોડ કરો અથવા કેમેરાથી લો.",
            non_bovine_msg: "પશુ સિવાયની અથવા અસ્પષ્ટ તસવીર. કૃપા કરીને ગાય અથવા ભેંસનો સ્પષ્ટ ફોટો આપો."
        },
        mr: {
            langTag: "मराठी",
            gov_banner: "भारत सरकार • भारत पशुधन",
            registry_live: "पशुगणना पोर्टल सक्रिय",
            brand_sub: "एआय गोवंशीय जात ओळख प्रणाली",
            step_nav_lang: "भाषा",
            step_nav_photo: "छायाचित्र",
            step_nav_result: "निष्कर्ष",
            p1_title: "पसंतीची भाषा निवडा",
            p1_subtitle: "क्षेत्रीय कामकाजासाठी आपली स्थानिक भाषा निवडा",
            btn_next: "फोटो अपलोड करण्यासाठी पुढे जा",
            btn_back: "भाषा निवडीकडे परत",
            p2_title: "टप्पा २: जनावरांचे छायाचित्र इनपुट करा",
            p2_subtitle: "गाय किंवा म्हशीचे स्पष्ट आणि थेट छायाचित्र द्या",
            tab_upload: "📁 डिव्हाइस स्टोरेज",
            tab_camera: "📷 थेट कॅमेरा",
            dropzone_prompt: "फोटो निवडण्यासाठी टॅप करा",
            dropzone_hint: "JPG, PNG, WEBP समर्थित • नैसर्गिक उजेडात घेतलेला फोटो उत्तम",
            btn_snap: "📸 फोटो काढा",
            btn_cancel: "रद्द करा",
            status_ready: "तपासणीसाठी सज्ज",
            tip_text: "<b>मार्गदर्शक सूचना:</b> जनावराची शिंगे, कपाळ आणि पोळी (dewlap) स्पष्ट दिसेल याची खात्री करा.",
            btn_run_diag: "जात तपासणी सुरू करा",
            p3_title: "टप्पा ३: जात ओळख निकाल",
            p3_subtitle: "संभाव्यता आणि शारीरिक लक्षणांसह शीर्ष ३ संभाव्य जाती",
            loading_title: "एआय मॉडेल विश्लेषण करत आहे...",
            loading_sub: "४१ नोंदणीकृत भारतीय व विदेशी जातींशी पडताळणी सुरू",
            lbl_verified_species: "सत्यापित मुख्य प्रजाती",
            top3_heading: "शीर्ष ३ शिफारस केलेल्या जाती (संभाव्यतेनुसार)",
            lbl_survey_slip: "क्षेत्रीय पडताळणी पावती",
            btn_export: "पावती डाऊनलोड करा",
            btn_back_upload: "मागे जा / फोटो बदला",
            btn_new_survey: "नवीन पशु सर्वेक्षण",
            footer_info: "<b>पशुदृष्टी AI v2.4</b> • राष्ट्रीय पशुधन गणना प्रणाली • पशुसंवर्धन आणि दुग्धव्यवसाय मंत्रालय",
            lbl_native: "📍 मूळ राज्य/प्रदेश:",
            lbl_traits: "👁️ मुख्य शारीरिक लक्षणे:",
            cow_species: "गाय (Bos indicus / Taurus)",
            buffalo_species: "मशी (Bubalus bubalis)",
            purpose_milch: "दुभती जात (Milch)",
            purpose_draught: "ओढकाम जात (Draught)",
            purpose_dual: "दुहेरी उद्देशीय (Dual)",
            alert_select_img: "कृपया पुढे जाण्यापूर्वी एक फोटो निवडा किंवा कॅमेऱ्याने काढा.",
            non_bovine_msg: "अस्पष्ट किंवा गैर-गोवंशीय प्रतिमा. कृपया गाय किंवा म्हशीचा स्पष्ट फोटो द्या."
        }
    };

    let selectedLang = 'en';
    let currentStep = 1;
    let selectedImageBlob = null;
    let cameraStream = null;
    let lastApiResult = null;

    // Screens
    const screens = {
        1: document.getElementById('screenStep1'),
        2: document.getElementById('screenStep2'),
        3: document.getElementById('screenStep3')
    };

    // Stepper Nodes
    const stepperNodes = {
        1: document.getElementById('nodeStep1'),
        2: document.getElementById('nodeStep2'),
        3: document.getElementById('nodeStep3')
    };

    const currentLangTag = document.getElementById('currentLangTag');

    // =========================================================================
    // 2. PAGE NAVIGATION ENGINE
    // =========================================================================
    function goToStep(stepNum) {
        currentStep = stepNum;

        // Toggle screen visibility
        Object.keys(screens).forEach(k => {
            if (parseInt(k) === stepNum) {
                screens[k].classList.add('active');
            } else {
                screens[k].classList.remove('active');
            }
        });

        // Update stepper nodes
        Object.keys(stepperNodes).forEach(k => {
            const num = parseInt(k);
            stepperNodes[k].classList.remove('active', 'completed');
            if (num === stepNum) {
                stepperNodes[k].classList.add('active');
            } else if (num < stepNum) {
                stepperNodes[k].classList.add('completed');
            }
        });

        // Scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Apply translations across document
    function applyI18n(lang) {
        selectedLang = lang;
        const dict = I18N[lang] || I18N.en;
        currentLangTag.textContent = dict.langTag;

        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.innerHTML = dict[key];
            }
        });

        // Refresh Results if on page 3
        if (lastApiResult) {
            renderResults(lastApiResult);
        }
    }

    // =========================================================================
    // 3. STEP 1: LANGUAGE SELECTION
    // =========================================================================
    const langCards = document.querySelectorAll('.lang-option-card');
    langCards.forEach(card => {
        card.addEventListener('click', () => {
            langCards.forEach(c => c.classList.remove('selected'));
            card.classList.add('selected');
            const langKey = card.getAttribute('data-lang');
            applyI18n(langKey);
        });
    });

    document.getElementById('btnStep1Next').addEventListener('click', () => {
        goToStep(2);
    });

    // =========================================================================
    // 4. STEP 2: PHOTO INGESTION & CAMERA
    // =========================================================================
    const btnTabUpload = document.getElementById('btnTabUpload');
    const btnTabCamera = document.getElementById('btnTabCamera');
    const dropzoneBox = document.getElementById('dropzoneBox');
    const filePicker = document.getElementById('filePicker');
    const cameraViewport = document.getElementById('cameraViewport');
    const camFeed = document.getElementById('camFeed');
    const camCanvas = document.getElementById('camCanvas');
    const btnSnapPhoto = document.getElementById('btnSnapPhoto');
    const btnCancelCamera = document.getElementById('btnCancelCamera');
    const previewCard = document.getElementById('previewCard');
    const imgPreview = document.getElementById('imgPreview');
    const previewTag = document.getElementById('previewTag');

    btnTabUpload.addEventListener('click', () => {
        btnTabUpload.classList.add('active');
        btnTabCamera.classList.remove('active');
        stopCamera();
        cameraViewport.classList.add('hidden');
        if (!selectedImageBlob) dropzoneBox.classList.remove('hidden');
    });

    btnTabCamera.addEventListener('click', () => {
        btnTabCamera.classList.add('active');
        btnTabUpload.classList.remove('active');
        dropzoneBox.classList.add('hidden');
        previewCard.classList.add('hidden');
        startCamera();
    });

    async function startCamera() {
        cameraViewport.classList.remove('hidden');
        try {
            cameraStream = await navigator.mediaDevices.getUserMedia({
                video: { facingMode: 'environment', width: { ideal: 1280 } }
            });
            camFeed.srcObject = cameraStream;
        } catch (err) {
            alert('Camera could not be accessed. Using file upload instead.');
            btnTabUpload.click();
        }
    }

    function stopCamera() {
        if (cameraStream) {
            cameraStream.getTracks().forEach(t => t.stop());
            cameraStream = null;
        }
    }

    btnSnapPhoto.addEventListener('click', () => {
        camCanvas.width = camFeed.videoWidth || 640;
        camCanvas.height = camFeed.videoHeight || 480;
        const ctx = camCanvas.getContext('2d');
        ctx.drawImage(camFeed, 0, 0, camCanvas.width, camCanvas.height);
        camCanvas.toBlob(blob => {
            selectBlob(blob, 'Camera_Snap.jpg');
            stopCamera();
            cameraViewport.classList.add('hidden');
        }, 'image/jpeg');
    });

    btnCancelCamera.addEventListener('click', () => {
        stopCamera();
        cameraViewport.classList.add('hidden');
        btnTabUpload.click();
    });

    dropzoneBox.addEventListener('click', () => filePicker.click());
    dropzoneBox.addEventListener('dragover', (e) => { e.preventDefault(); dropzoneBox.style.borderColor = '#15663d'; });
    dropzoneBox.addEventListener('dragleave', () => { dropzoneBox.style.borderColor = '#cbd5e1'; });
    dropzoneBox.addEventListener('drop', (e) => {
        e.preventDefault();
        dropzoneBox.style.borderColor = '#cbd5e1';
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const f = e.dataTransfer.files[0];
            selectBlob(f, f.name);
        }
    });

    filePicker.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            const f = e.target.files[0];
            selectBlob(f, f.name);
        }
    });

    function selectBlob(blob, filename) {
        selectedImageBlob = blob;
        imgPreview.src = URL.createObjectURL(blob);
        previewTag.textContent = filename || 'Image Ready';
        dropzoneBox.classList.add('hidden');
        previewCard.classList.remove('hidden');
    }

    // Step 2 Buttons
    document.getElementById('btnStep2Back').addEventListener('click', () => {
        stopCamera();
        goToStep(1);
    });

    document.getElementById('btnStep2Next').addEventListener('click', async () => {
        const dict = I18N[selectedLang];
        if (!selectedImageBlob) {
            alert(dict.alert_select_img);
            return;
        }
        stopCamera();
        goToStep(3);
        await executeInference();
    });

    // =========================================================================
    // 5. STEP 3: EXECUTE INFERENCE & RENDER RESULTS
    // =========================================================================
    const loadingBox = document.getElementById('loadingBox');
    const outputBox = document.getElementById('outputBox');
    const txtSpeciesName = document.getElementById('txtSpeciesName');
    const txtSpeciesScore = document.getElementById('txtSpeciesScore');
    const breedCardsList = document.getElementById('breedCardsList');
    const btnExportSlip = document.getElementById('btnExportSlip');

    const errorBox = document.getElementById('errorBox');
    const errorMsgText = document.getElementById('errorMsgText');

    async function executeInference() {
        loadingBox.classList.remove('hidden');
        outputBox.classList.add('hidden');
        errorBox.classList.add('hidden');

        const formData = new FormData();
        formData.append('file', selectedImageBlob, 'livestock.jpg');

        try {
            const resp = await fetch('/api/v1/classify', {
                method: 'POST',
                body: formData
            });
            const data = await resp.json();
            lastApiResult = data;
            renderResults(data);
        } catch (err) {
            loadingBox.classList.add('hidden');
            errorBox.classList.remove('hidden');
            errorMsgText.textContent = 'Identification service unavailable. Please check server connectivity.';
        }
    }

    function renderResults(data) {
        loadingBox.classList.add('hidden');
        const dict = I18N[selectedLang];

        if (!data.success) {
            outputBox.classList.add('hidden');
            errorBox.classList.remove('hidden');
            errorMsgText.textContent = data.message || dict.non_bovine_msg;
            return;
        }

        errorBox.classList.add('hidden');
        outputBox.classList.remove('hidden');

        // Species
        txtSpeciesName.textContent = data.species === 'Cow' ? dict.cow_species : dict.buffalo_species;
        txtSpeciesScore.textContent = `${data.species_confidence}%`;

        // Breeds
        breedCardsList.innerHTML = '';
        data.top_breeds.forEach((b, idx) => {
            let purposeClass = 'badge-milch';
            let purposeText = dict.purpose_milch;
            if (b.category.includes('Draught')) {
                purposeClass = 'badge-draught';
                purposeText = dict.purpose_draught;
            } else if (b.category.includes('Dual')) {
                purposeClass = 'badge-dual';
                purposeText = dict.purpose_dual;
            }

            // Regional Breed Name with English in parentheses
            let displayBreedName = b.breed;
            if (selectedLang !== 'en' && b.translations && b.translations.names && b.translations.names[selectedLang]) {
                const regionalName = b.translations.names[selectedLang];
                displayBreedName = `${regionalName} (${b.breed})`;
            }

            // Localized Origin & Hallmarks
            let displayOrigin = b.origin;
            if (selectedLang !== 'en' && b.translations && b.translations.origin && b.translations.origin[selectedLang]) {
                displayOrigin = b.translations.origin[selectedLang];
            }

            let displayHallmarks = b.hallmarks;
            if (selectedLang !== 'en' && b.translations && b.translations.hallmarks && b.translations.hallmarks[selectedLang]) {
                displayHallmarks = b.translations.hallmarks[selectedLang];
            }

            const card = document.createElement('div');
            card.className = `breed-card ${idx === 0 ? 'winner' : ''}`;
            card.innerHTML = `
                <div class="breed-head">
                    <div class="breed-title-area">
                        <span class="rank-tag">#${idx + 1}</span>
                        <span class="breed-name">${displayBreedName}</span>
                        <span class="type-badge ${purposeClass}">${purposeText}</span>
                    </div>
                    <span class="breed-conf">${b.confidence}%</span>
                </div>
                <div class="meter-track">
                    <div class="meter-fill" style="width: ${b.confidence}%"></div>
                </div>
                <table class="meta-table">
                    <tr>
                        <td class="lbl">${dict.lbl_native}</td>
                        <td class="val">${displayOrigin}</td>
                    </tr>
                    <tr>
                        <td class="lbl">${dict.lbl_traits}</td>
                        <td class="val">${displayHallmarks}</td>
                    </tr>
                </table>
            `;
            breedCardsList.appendChild(card);
        });
    }

    // Step 3 Navigation
    document.getElementById('btnStep3Back').addEventListener('click', () => {
        // Back / Change Image
        goToStep(2);
    });

    document.getElementById('btnStep3New').addEventListener('click', () => {
        // Clear and restart from Step 1
        selectedImageBlob = null;
        lastApiResult = null;
        filePicker.value = '';
        previewCard.classList.add('hidden');
        dropzoneBox.classList.remove('hidden');
        goToStep(1);
    });

    // Slip download
    btnExportSlip.addEventListener('click', () => {
        if (!lastApiResult || !lastApiResult.top_breeds) return;
        const top = lastApiResult.top_breeds[0];
        const dict = I18N[selectedLang];

        let topBreedName = top.breed;
        let topOrigin = top.origin;
        let topHallmarks = top.hallmarks;

        if (selectedLang !== 'en' && top.translations) {
            if (top.translations.names && top.translations.names[selectedLang]) {
                topBreedName = `${top.translations.names[selectedLang]} (${top.breed})`;
            }
            if (top.translations.origin && top.translations.origin[selectedLang]) {
                topOrigin = top.translations.origin[selectedLang];
            }
            if (top.translations.hallmarks && top.translations.hallmarks[selectedLang]) {
                topHallmarks = top.translations.hallmarks[selectedLang];
            }
        }

        const record = `========================================================
BHARAT PASHUDHAN LIVESTOCK IDENTIFICATION RECORD
Certified Field Verification Slip (PashuDrishti AI v2.4)
========================================================
Language          : ${dict.langTag}
Species           : ${lastApiResult.species} (${lastApiResult.species_confidence}%)
Assigned Breed    : ${topBreedName}
Confidence        : ${top.confidence}%
Category          : ${top.category}
Native State      : ${topOrigin}
Field Hallmarks   : ${topHallmarks}

Top 3 Triangulated Breeds:
1. ${lastApiResult.top_breeds[0].breed} (${lastApiResult.top_breeds[0].confidence}%)
2. ${lastApiResult.top_breeds[1].breed} (${lastApiResult.top_breeds[1].confidence}%)
3. ${lastApiResult.top_breeds[2].breed} (${lastApiResult.top_breeds[2].confidence}%)
========================================================
Compliant with Ministry of Animal Husbandry & Dairying
`;
        const blob = new Blob([record], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `PashuRecord_${top.breed.replace(/\s+/g, '_')}.txt`;
        a.click();
    });

    // Initialize Default Language
    applyI18n('en');
});
