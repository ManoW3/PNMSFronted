import React, { useState, useEffect, useRef } from 'react';
import Switch from '@mui/material/Switch';
import { useNavigate } from 'react-router-dom';
import i18n from 'i18next';
import { useTranslation, initReactI18next } from 'react-i18next';

// Initialize i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: {
        translation: {
          "Profile Setup": "Configuración de perfil",
          "Select your native language": "Seleccione su idioma nativo",
          "Your current English level": "Su nivel actual de inglés",
          "Learning Goals (Select at least 3)": "Objetivos de aprendizaje (Seleccione al menos 3)",
          "Save Profile": "Guardar perfil",
          "Please select at least 3 learning goals.": "Por favor, seleccione al menos 3 objetivos de aprendizaje.",
          "Please select your native language.": "Por favor, seleccione su idioma nativo.",
          "Improve Speaking": "Mejorar el habla",
          "Enhance Reading": "Mejorar la lectura",
          "Develop Writing": "Desarrollar la escritura",
          "Boost Listening": "Aumentar la comprensión auditiva",
          "Master Grammar": "Dominar la gramática",
          "Expand Vocabulary": "Ampliar el vocabulario",
          "Practice Conversation": "Practicar la conversación",
          "Perfect Pronunciation": "Perfeccionar la pronunciación",
          "Beginner": "Principiante",
          "Basic": "Básico",
          "Intermediate": "Intermedio",
          "Competent": "Competente",
          "Advanced": "Avanzado",
          "Expert": "Experto"
        }
      },
      fr: {
        translation: {
          "Profile Setup": "Configuration du profil",
          "Select your native language": "Sélectionnez votre langue maternelle",
          "Your current English level": "Votre niveau d'anglais actuel",
          "Learning Goals (Select at least 3)": "Objectifs d'apprentissage (Sélectionnez-en au moins 3)",
          "Save Profile": "Enregistrer le profil",
          "Please select at least 3 learning goals.": "Veuillez sélectionner au moins 3 objectifs d'apprentissage.",
          "Please select your native language.": "Veuillez sélectionner votre langue maternelle.",
          "Improve Speaking": "Améliorer l'expression orale",
          "Enhance Reading": "Améliorer la lecture",
          "Develop Writing": "Développer l'écriture",
          "Boost Listening": "Améliorer l'écoute",
          "Master Grammar": "Maîtriser la grammaire",
          "Expand Vocabulary": "Élargir le vocabulaire",
          "Practice Conversation": "Pratiquer la conversation",
          "Perfect Pronunciation": "Perfectionner la prononciation",
          "Beginner": "Débutant",
          "Basic": "Basique",
          "Intermediate": "Intermédiaire",
          "Competent": "Compétent",
          "Advanced": "Avancé",
          "Expert": "Expert"
        }
      },

      de: {
        translation: {
            "Profile Setup": "Profielinstellingen",
            "Select your native language": "Selecteer uw moedertaal",
            "Your current English level": "Uw huidige Engelse niveau",
            "Learning Goals (Select at least 3)": "Leerdoelen (Selecteer er minstens 3)",
            "Save Profile": "Profiel opslaan",
            "Please select at least 3 learning goals.": "Selecteer alstublieft minstens 3 leerdoelen.",
            "Please select your native language.": "Selecteer alstublieft uw moedertaal.",
            "Improve Speaking": "Verbeteren spreken",
            "Enhance Reading": "Verbeteren lezen",
            "Develop Writing": "Ontwikkel schrijven",
            "Boost Listening": "Verbeteren luisteren",
            "Master Grammar": "Beheersen grammatica",
            "Expand Vocabulary": "Uitbreiden woordenschat",
            "Practice Conversation": "Oefen gesprek",
            "Perfect Pronunciation": "Perfecte uitspraak",
            "Beginner": "Beginner",
            "Basic": "Basis",
            "Intermediate": "Tussenliggend",
            "Competent": "Bekwaam",
            "Advanced": "Gevorderd",
            "Expert": "Expert"
        }
    },
    it: {
        translation: {
            "Profile Setup": "Impostazioni del profilo",
            "Select your native language": "Seleziona la tua lingua madre",
            "Your current English level": "Il tuo livello di inglese attuale",
            "Learning Goals (Select at least 3)": "Obiettivi di apprendimento (Seleziona almeno 3)",
            "Save Profile": "Salva profilo",
            "Please select at least 3 learning goals.": "Seleziona almeno 3 obiettivi di apprendimento.",
            "Please select your native language.": "Seleziona la tua lingua madre.",
            "Improve Speaking": "Migliorare la conversazione",
            "Enhance Reading": "Migliorare la lettura",
            "Develop Writing": "Sviluppare la scrittura",
            "Boost Listening": "Migliorare l'ascolto",
            "Master Grammar": "Padroneggiare la grammatica",
            "Expand Vocabulary": "Ampliare il vocabolario",
            "Practice Conversation": "Praticare la conversazione",
            "Perfect Pronunciation": "Perfezionare la pronuncia",
            "Beginner": "Principiante",
            "Basic": "Base",
            "Intermediate": "Intermedio",
            "Competent": "Competente",
            "Advanced": "Avanzato",
            "Expert": "Esperto"
        }
    },
    pt: {
        translation: {
            "Profile Setup": "Configuração do perfil",
            "Select your native language": "Selecione sua língua materna",
            "Your current English level": "Seu nível atual de inglês",
            "Learning Goals (Select at least 3)": "Objetivos de aprendizado (Selecione pelo menos 3)",
            "Save Profile": "Salvar perfil",
            "Please select at least 3 learning goals.": "Por favor, selecione pelo menos 3 objetivos de aprendizado.",
            "Please select your native language.": "Por favor, selecione sua língua materna.",
            "Improve Speaking": "Melhorar a fala",
            "Enhance Reading": "Melhorar a leitura",
            "Develop Writing": "Desenvolver a escrita",
            "Boost Listening": "Melhorar a audição",
            "Master Grammar": "Dominar a gramática",
            "Expand Vocabulary": "Expandir vocabulário",
            "Practice Conversation": "Praticar conversação",
            "Perfect Pronunciation": "Aperfeiçoar a pronúncia",
            "Beginner": "Iniciante",
            "Basic": "Básico",
            "Intermediate": "Intermediário",
            "Competent": "Competente",
            "Advanced": "Avançado",
            "Expert": "Especialista"
        }
    },
    ru: {
      translation: {
          "Profile Setup": "Настройка профиля",
          "Select your native language": "Выберите ваш родной язык",
          "Your current English level": "Ваш текущий уровень английского",
          "Learning Goals (Select at least 3)": "Цели обучения (Выберите не менее 3)",
          "Save Profile": "Сохранить профиль",
          "Please select at least 3 learning goals.": "Пожалуйста, выберите не менее 3 целей обучения.",
          "Please select your native language.": "Пожалуйста, выберите ваш родной язык.",
          "Improve Speaking": "Улучшить разговорную речь",
          "Enhance Reading": "Улучшить чтение",
          "Develop Writing": "Развить навыки письма",
          "Boost Listening": "Улучшить восприятие на слух",
          "Master Grammar": "Освоить грамматику",
          "Expand Vocabulary": "Расширить словарный запас",
          "Practice Conversation": "Практиковать разговор",
          "Perfect Pronunciation": "Совершенствовать произношение",
          "Beginner": "Начинающий",
          "Basic": "Базовый",
          "Intermediate": "Средний",
          "Competent": "Компетентный",
          "Advanced": "Продвинутый",
          "Expert": "Эксперт"
      }
  },
  zh: {
      translation: {
          "Profile Setup": "配置文件设置",
          "Select your native language": "选择你的母语",
          "Your current English level": "您目前的英语水平",
          "Learning Goals (Select at least 3)": "学习目标（至少选择3个）",
          "Save Profile": "保存配置文件",
          "Please select at least 3 learning goals.": "请选择至少3个学习目标。",
          "Please select your native language.": "请选择您的母语。",
          "Improve Speaking": "提高口语",
          "Enhance Reading": "提高阅读",
          "Develop Writing": "提高写作",
          "Boost Listening": "提高听力",
          "Master Grammar": "掌握语法",
          "Expand Vocabulary": "扩大词汇量",
          "Practice Conversation": "练习对话",
          "Perfect Pronunciation": "完善发音",
          "Beginner": "初学者",
          "Basic": "基础",
          "Intermediate": "中级",
          "Competent": "胜任",
          "Advanced": "高级",
          "Expert": "专家"
      }
  },
  ja: {
      translation: {
          "Profile Setup": "プロファイル設定",
          "Select your native language": "母国語を選択してください",
          "Your current English level": "現在の英語レベル",
          "Learning Goals (Select at least 3)": "学習目標（少なくとも3つ選択してください）",
          "Save Profile": "プロファイルを保存",
          "Please select at least 3 learning goals.": "少なくとも3つの学習目標を選択してください。",
          "Please select your native language.": "母国語を選択してください。",
          "Improve Speaking": "スピーキングを向上させる",
          "Enhance Reading": "リーディングを向上させる",
          "Develop Writing": "ライティングを発展させる",
          "Boost Listening": "リスニングを向上させる",
          "Master Grammar": "文法を習得する",
          "Expand Vocabulary": "語彙を拡張する",
          "Practice Conversation": "会話を練習する",
          "Perfect Pronunciation": "発音を完璧にする",
          "Beginner": "初心者",
          "Basic": "基本",
          "Intermediate": "中級",
          "Competent": "堪能",
          "Advanced": "上級",
          "Expert": "エキスパート"
      }
  },
  ko: {
      translation: {
          "Profile Setup": "프로필 설정",
          "Select your native language": "모국어를 선택하세요",
          "Your current English level": "현재 영어 수준",
          "Learning Goals (Select at least 3)": "학습 목표 (최소 3개 선택)",
          "Save Profile": "프로필 저장",
          "Please select at least 3 learning goals.": "최소 3개의 학습 목표를 선택하세요.",
          "Please select your native language.": "모국어를 선택하세요.",
          "Improve Speaking": "말하기 향상",
          "Enhance Reading": "읽기 향상",
          "Develop Writing": "글쓰기 개발",
          "Boost Listening": "듣기 향상",
          "Master Grammar": "문법 숙달",
          "Expand Vocabulary": "어휘 확장",
          "Practice Conversation": "대화 연습",
          "Perfect Pronunciation": "발음 완벽",
          "Beginner": "초보자",
          "Basic": "기본",
          "Intermediate": "중급",
          "Competent": "유능한",
          "Advanced": "고급",
          "Expert": "전문가"
      }
  },
  ar: {
      translation: {
          "Profile Setup": "إعداد الملف الشخصي",
          "Select your native language": "اختر لغتك الأم",
          "Your current English level": "مستواك الحالي في اللغة الإنجليزية",
          "Learning Goals (Select at least 3)": "أهداف التعلم (حدد على الأقل 3)",
          "Save Profile": "حفظ الملف الشخصي",
          "Please select at least 3 learning goals.": "يرجى تحديد ما لا يقل عن 3 أهداف للتعلم.",
          "Please select your native language.": "يرجى تحديد لغتك الأم.",
          "Improve Speaking": "تحسين التحدث",
          "Enhance Reading": "تحسين القراءة",
          "Develop Writing": "تطوير الكتابة",
          "Boost Listening": "تحسين الاستماع",
          "Master Grammar": "إتقان القواعد",
          "Expand Vocabulary": "توسيع المفردات",
          "Practice Conversation": "ممارسة المحادثة",
          "Perfect Pronunciation": "إتقان النطق",
          "Beginner": "مبتدئ",
          "Basic": "أساسي",
          "Intermediate": "متوسط",
          "Competent": "كفؤ",
          "Advanced": "متقدم",
          "Expert": "خبير"
      }
  },
  hi: {
      translation: {
          "Profile Setup": "प्रोफ़ाइल सेटअप",
          "Select your native language": "अपनी मातृभाषा चुनें",
          "Your current English level": "आपका वर्तमान अंग्रेजी स्तर",
          "Learning Goals (Select at least 3)": "सीखने के लक्ष्य (कम से कम 3 चुनें)",
          "Save Profile": "प्रोफ़ाइल सहेजें",
          "Please select at least 3 learning goals.": "कृपया कम से कम 3 सीखने के लक्ष्य चुनें।",
          "Please select your native language.": "कृपया अपनी मातृभाषा चुनें।",
          "Improve Speaking": "बोलने में सुधार करें",
          "Enhance Reading": "पढ़ने में सुधार करें",
          "Develop Writing": "लेखन विकसित करें",
          "Boost Listening": "सुनने की क्षमता बढ़ाएं",
          "Master Grammar": "व्याकरण में महारत हासिल करें",
          "Expand Vocabulary": "शब्दावली का विस्तार करें",
          "Practice Conversation": "वार्तालाप का अभ्यास करें",
          "Perfect Pronunciation": "उच्चारण को सही करें",
          "Beginner": "शुरुआती",
          "Basic": "बुनियादी",
          "Intermediate": "मध्यवर्ती",
          "Competent": "प्रवीण",
          "Advanced": "उन्नत",
          "Expert": "विशेषज्ञ"
      }
  },
  tr: {
      translation: {
          "Profile Setup": "Profil Ayarları",
          "Select your native language": "Ana dilinizi seçin",
          "Your current English level": "Mevcut İngilizce seviyeniz",
          "Learning Goals (Select at least 3)": "Öğrenme Hedefleri (En az 3 tane seçin)",
          "Save Profile": "Profili Kaydet",
          "Please select at least 3 learning goals.": "Lütfen en az 3 öğrenme hedefi seçin.",
          "Please select your native language.": "Lütfen ana dilinizi seçin.",
          "Improve Speaking": "Konuşmayı Geliştir",
          "Enhance Reading": "Okumayı Geliştir",
          "Develop Writing": "Yazmayı Geliştir",
          "Boost Listening": "Dinlemeyi Geliştir",
          "Master Grammar": "Dilbilgisini Öğren",
          "Expand Vocabulary": "Kelimeleri Genişlet",
          "Practice Conversation": "Konuşma Pratiği Yap",
          "Perfect Pronunciation": "Telaffuzu Mükemmelleştir",
          "Beginner": "Başlangıç",
          "Basic": "Temel",
          "Intermediate": "Orta",
          "Competent": "Yetkin",
          "Advanced": "İleri",
          "Expert": "Uzman"
      }
  },
  pl: {
    translation: {
        "Profile Setup": "Konfiguracja profilu",
        "Select your native language": "Wybierz swój język ojczysty",
        "Your current English level": "Twój obecny poziom angielskiego",
        "Learning Goals (Select at least 3)": "Cele nauki (Wybierz co najmniej 3)",
        "Save Profile": "Zapisz profil",
        "Please select at least 3 learning goals.": "Wybierz co najmniej 3 cele nauki.",
        "Please select your native language.": "Wybierz swój język ojczysty.",
        "Improve Speaking": "Popraw mówienie",
        "Enhance Reading": "Popraw czytanie",
        "Develop Writing": "Rozwijaj pisanie",
        "Boost Listening": "Popraw słuchanie",
        "Master Grammar": "Opanuj gramatykę",
        "Expand Vocabulary": "Rozszerz słownictwo",
        "Practice Conversation": "Ćwicz rozmowę",
        "Perfect Pronunciation": "Udoskonal wymowę",
        "Beginner": "Początkujący",
        "Basic": "Podstawowy",
        "Intermediate": "Średnio zaawansowany",
        "Competent": "Kompetentny",
        "Advanced": "Zaawansowany",
        "Expert": "Ekspert"
    }
},
nl: {
    translation: {
        "Profile Setup": "Profielinstellingen",
        "Select your native language": "Selecteer uw moedertaal",
        "Your current English level": "Uw huidige Engelse niveau",
        "Learning Goals (Select at least 3)": "Leerdoelen (Selecteer er minstens 3)",
        "Save Profile": "Profiel opslaan",
        "Please select at least 3 learning goals.": "Selecteer alstublieft minstens 3 leerdoelen.",
        "Please select your native language.": "Selecteer alstublieft uw moedertaal.",
        "Improve Speaking": "Verbeteren spreken",
        "Enhance Reading": "Verbeteren lezen",
        "Develop Writing": "Ontwikkel schrijven",
        "Boost Listening": "Verbeteren luisteren",
        "Master Grammar": "Beheersen grammatica",
        "Expand Vocabulary": "Uitbreiden woordenschat",
        "Practice Conversation": "Oefen gesprek",
        "Perfect Pronunciation": "Perfecte uitspraak",
        "Beginner": "Beginner",
        "Basic": "Basis",
        "Intermediate": "Tussenliggend",
        "Competent": "Bekwaam",
        "Advanced": "Gevorderd",
        "Expert": "Expert"
    }
},
sv: {
    translation: {
        "Profile Setup": "Profilinställningar",
        "Select your native language": "Välj ditt modersmål",
        "Your current English level": "Din nuvarande engelska nivå",
        "Learning Goals (Select at least 3)": "Inlärningsmål (Välj minst 3)",
        "Save Profile": "Spara profil",
        "Please select at least 3 learning goals.": "Välj minst 3 inlärningsmål.",
        "Please select your native language.": "Välj ditt modersmål.",
        "Improve Speaking": "Förbättra tal",
        "Enhance Reading": "Förbättra läsning",
        "Develop Writing": "Utveckla skrivning",
        "Boost Listening": "Förbättra lyssning",
        "Master Grammar": "Behärska grammatik",
        "Expand Vocabulary": "Utöka ordförråd",
        "Practice Conversation": "Öva konversation",
        "Perfect Pronunciation": "Perfektionera uttal",
        "Beginner": "Nybörjare",
        "Basic": "Grundläggande",
        "Intermediate": "Mellanliggande",
        "Competent": "Kompetent",
        "Advanced": "Avancerad",
        "Expert": "Expert"
    }
},
he: {
    translation: {
        "Profile Setup": "הגדרת פרופיל",
        "Select your native language": "בחר את שפת האם שלך",
        "Your current English level": "רמת האנגלית הנוכחית שלך",
        "Learning Goals (Select at least 3)": "מטרות למידה (בחר לפחות 3)",
        "Save Profile": "שמור פרופיל",
        "Please select at least 3 learning goals.": "בחר לפחות 3 מטרות למידה.",
        "Please select your native language.": "בחר את שפת האם שלך.",
        "Improve Speaking": "שפר דיבור",
        "Enhance Reading": "שפר קריאה",
        "Develop Writing": "פתח כתיבה",
        "Boost Listening": "שפר שמיעה",
        "Master Grammar": "שלוט בדקדוק",
        "Expand Vocabulary": "הרחב אוצר מילים",
        "Practice Conversation": "תרגל שיחה",
        "Perfect Pronunciation": "שפר הגייה",
        "Beginner": "מתחיל",
        "Basic": "בסיסי",
        "Intermediate": "בינוני",
        "Competent": "מוכשר",
        "Advanced": "מתקדם",
        "Expert": "מומחה"
    }
},
vi: {
    translation: {
        "Profile Setup": "Thiết lập hồ sơ",
        "Select your native language": "Chọn ngôn ngữ mẹ đẻ của bạn",
        "Your current English level": "Trình độ tiếng Anh hiện tại của bạn",
        "Learning Goals (Select at least 3)": "Mục tiêu học tập (Chọn ít nhất 3)",
        "Save Profile": "Lưu hồ sơ",
        "Please select at least 3 learning goals.": "Vui lòng chọn ít nhất 3 mục tiêu học tập.",
        "Please select your native language.": "Vui lòng chọn ngôn ngữ mẹ đẻ của bạn.",
        "Improve Speaking": "Cải thiện nói",
        "Enhance Reading": "Cải thiện đọc",
        "Develop Writing": "Phát triển viết",
        "Boost Listening": "Cải thiện nghe",
        "Master Grammar": "Thành thạo ngữ pháp",
        "Expand Vocabulary": "Mở rộng từ vựng",
        "Practice Conversation": "Luyện tập hội thoại",
        "Perfect Pronunciation": "Hoàn thiện phát âm",
        "Beginner": "Người mới bắt đầu",
        "Basic": "Cơ bản",
        "Intermediate": "Trung cấp",
        "Competent": "Thành thạo",
        "Advanced": "Nâng cao",
        "Expert": "Chuyên gia"
    }
},
ta: {
    translation: {
        "Profile Setup": "சுயவிவர அமைப்பு",
        "Select your native language": "உங்கள் தாய்மொழியைத் தேர்ந்தெடுக்கவும்",
        "Your current English level": "உங்கள் தற்போதைய ஆங்கில நிலை",
        "Learning Goals (Select at least 3)": "கற்றல் குறிக்கோள்கள் (குறைந்தது 3 ஐத் தேர்ந்தெடுக்கவும்)",
        "Save Profile": "சுயவிவரம் சேமிக்கவும்",
        "Please select at least 3 learning goals.": "தயவுசெய்து குறைந்தது 3 கற்றல் குறிக்கோள்களைத் தேர்ந்தெடுக்கவும்.",
        "Please select your native language.": "தயவுசெய்து உங்கள் தாய்மொழியைத் தேர்ந்தெடுக்கவும்.",
        "Improve Speaking": "பேசுவதில் மேம்படுத்தவும்",
        "Enhance Reading": "படிக்க சிறப்படுத்தவும்",
        "Develop Writing": "எழுதுவதில் மேம்படுத்தவும்",
        "Boost Listening": "கேட்பதில் மேம்படுத்தவும்",
        "Master Grammar": "வழக்கு இலக்கணத்தை கற்றுக்கொள்வது",
        "Expand Vocabulary": "சொல்லகராதியை விரிவுபடுத்தவும்",
        "Practice Conversation": "உரையாடல் பயிற்சி",
        "Perfect Pronunciation": "உச்சரிப்பை சரியாக்கவும்",
        "Beginner": "ஆரம்ப நிலை",
        "Basic": "அடிப்படை",
        "Intermediate": "இடைநிலை",
        "Competent": "தகுதியான",
        "Advanced": "முன்னோக்கி",
        "Expert": "வல்லுநர்"
    }
},
bn: {
  translation: {
      "Profile Setup": "প্রোফাইল সেটআপ",
      "Select your native language": "আপনার মাতৃভাষা নির্বাচন করুন",
      "Your current English level": "আপনার বর্তমান ইংরেজি স্তর",
      "Learning Goals (Select at least 3)": "শিক্ষার লক্ষ্য (কমপক্ষে ৩টি নির্বাচন করুন)",
      "Save Profile": "প্রোফাইল সংরক্ষণ করুন",
      "Please select at least 3 learning goals.": "অনুগ্রহ করে কমপক্ষে ৩টি শিক্ষার লক্ষ্য নির্বাচন করুন।",
      "Please select your native language.": "অনুগ্রহ করে আপনার মাতৃভাষা নির্বাচন করুন।",
      "Improve Speaking": "কথোপকথনে উন্নতি করুন",
      "Enhance Reading": "পাঠ উন্নতি করুন",
      "Develop Writing": "লেখার উন্নতি করুন",
      "Boost Listening": "শ্রবণ উন্নতি করুন",
      "Master Grammar": "ব্যাকরণ আয়ত্ত করুন",
      "Expand Vocabulary": "শব্দভান্ডার বাড়ান",
      "Practice Conversation": "আলাপচারিতা অনুশীলন করুন",
      "Perfect Pronunciation": "উচ্চারণ শুদ্ধ করুন",
      "Beginner": "শিক্ষানবিশ",
      "Basic": "মৌলিক",
      "Intermediate": "মধ্যবর্তী",
      "Competent": "দক্ষ",
      "Advanced": "উন্নত",
      "Expert": "বিশেষজ্ঞ"
  }
},
fil: {
  translation: {
      "Profile Setup": "Setup ng Profile",
      "Select your native language": "Piliin ang iyong katutubong wika",
      "Your current English level": "Ang kasalukuyang antas mo sa Ingles",
      "Learning Goals (Select at least 3)": "Mga Layunin sa Pagkatuto (Pumili ng hindi bababa sa 3)",
      "Save Profile": "I-save ang Profile",
      "Please select at least 3 learning goals.": "Mangyaring pumili ng hindi bababa sa 3 layunin sa pagkatuto.",
      "Please select your native language.": "Mangyaring piliin ang iyong katutubong wika.",
      "Improve Speaking": "Pagbutihin ang Pagsasalita",
      "Enhance Reading": "Pagbutihin ang Pagbasa",
      "Develop Writing": "Pagbutihin ang Pagsusulat",
      "Boost Listening": "Pagbutihin ang Pakikinig",
      "Master Grammar": "Pagbutihin ang Gramatika",
      "Expand Vocabulary": "Palawakin ang Bokabularyo",
      "Practice Conversation": "Magsanay sa Pakikipag-usap",
      "Perfect Pronunciation": "Pagbutihin ang Pagbigkas",
      "Beginner": "Baguhan",
      "Basic": "Pangunahing",
      "Intermediate": "Panggitna",
      "Competent": "Mahusay",
      "Advanced": "Mataas na Antas",
      "Expert": "Dalubhasa"
  }
},
pa: {
  translation: {
      "Profile Setup": "ਪ੍ਰੋਫਾਈਲ ਸੈਟਅੱਪ",
      "Select your native language": "ਆਪਣੀ ਮਾਤਭਾਸ਼ਾ ਚੁਣੋ",
      "Your current English level": "ਤੁਹਾਡਾ ਮੌਜੂਦਾ ਅੰਗਰੇਜ਼ੀ ਪੱਧਰ",
      "Learning Goals (Select at least 3)": "ਸਿੱਖਣ ਦੇ ਲੱਖ (ਘੱਟੋ-ਘੱਟ 3 ਚੁਣੋ)",
      "Save Profile": "ਪ੍ਰੋਫਾਈਲ ਸੇਵ ਕਰੋ",
      "Please select at least 3 learning goals.": "ਕਿਰਪਾ ਕਰਕੇ ਘੱਟੋ-ਘੱਟ 3 ਸਿੱਖਣ ਦੇ ਲੱਖ ਚੁਣੋ।",
      "Please select your native language.": "ਕਿਰਪਾ ਕਰਕੇ ਆਪਣੀ ਮਾਤਭਾਸ਼ਾ ਚੁਣੋ।",
      "Improve Speaking": "ਬੋਲਣ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ",
      "Enhance Reading": "ਪੜ੍ਹਨ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ",
      "Develop Writing": "ਲਿਖਣ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ",
      "Boost Listening": "ਸੁਣਨ ਵਿੱਚ ਸੁਧਾਰ ਕਰੋ",
      "Master Grammar": "ਵਿਆਕਰਣ ਨੂੰ ਮਾਹਰ ਬਣਾਓ",
      "Expand Vocabulary": "ਸ਼ਬਦ-ਭੰਡਾਰ ਦਾ ਵਾਧਾ ਕਰੋ",
      "Practice Conversation": "ਗੱਲਬਾਤ ਦਾ ਅਭਿਆਸ ਕਰੋ",
      "Perfect Pronunciation": "ਉਚਾਰਨ ਨੂੰ ਪੂਰਨ ਕਰੋ",
      "Beginner": "ਬਿਗਿਨਰ",
      "Basic": "ਬੁਨਿਆਦੀ",
      "Intermediate": "ਦਰਮਿਆਨਾ",
      "Competent": "ਸਮਰੱਥ",
      "Advanced": "ਅਗਾਂਹ",
      "Expert": "ਵਿਦਵਾਨ"
  }
},
so: {
  translation: {
      "Profile Setup": "Dejinta Profile",
      "Select your native language": "Xulo luqaddaada hooyo",
      "Your current English level": "Heerkaaga Ingiriisi ee hadda",
      "Learning Goals (Select at least 3)": "Hadafka Barashada (Xulo ugu yaraan 3)",
      "Save Profile": "Keydi Profile",
      "Please select at least 3 learning goals.": "Fadlan xulo ugu yaraan 3 hadaf barasho.",
      "Please select your native language.": "Fadlan xulo luqaddaada hooyo.",
      "Improve Speaking": "Hagaaji Hadalka",
      "Enhance Reading": "Hagaaji Akhriska",
      "Develop Writing": "Horumari Qorista",
      "Boost Listening": "Hagaaji Dhegeysiga",
      "Master Grammar": "Ku takhasuso Naxwaha",
      "Expand Vocabulary": "Ballaadhi Kalmadaha",
      "Practice Conversation": "Tababaro Wadahadalka",
      "Perfect Pronunciation": "Hagaaji Luuqadda",
      "Beginner": "Bilow",
      "Basic": "Aasaasi",
      "Intermediate": "Dhexdhexaad",
      "Competent": "Xirfad leh",
      "Advanced": "Horumarsan",
      "Expert": "Khabiir"
  }
},
ht: {
  translation: {
      "Profile Setup": "Konfigirasyon Pwofil",
      "Select your native language": "Chwazi lang natif natal ou",
      "Your current English level": "Nivo angle ou kounye a",
      "Learning Goals (Select at least 3)": "Objektif Aprantisaj (Chwazi omwen 3)",
      "Save Profile": "Sove Pwofil",
      "Please select at least 3 learning goals.": "Tanpri chwazi omwen 3 objektif aprantisaj.",
      "Please select your native language.": "Tanpri chwazi lang natif natal ou.",
      "Improve Speaking": "Amelyore Pwononsyasyon",
      "Enhance Reading": "Amelyore Lejè",
      "Develop Writing": "Devlope Ekriti",
      "Boost Listening": "Amelyore Ekoute",
      "Master Grammar": "Mèt Gramatik",
      "Expand Vocabulary": "Elaji Vokabilè",
      "Practice Conversation": "Pratike Konvèsasyon",
      "Perfect Pronunciation": "Pafè Pwononsyasyon",
      "Beginner": "Debutan",
      "Basic": "Debaz",
      "Intermediate": "Entèmedyè",
      "Competent": "Konpetan",
      "Advanced": "Avanse",
      "Expert": "Ekspè"
  }
},
id: {
  translation: {
      "Profile Setup": "Pengaturan Profil",
      "Select your native language": "Pilih bahasa asli Anda",
      "Your current English level": "Tingkat bahasa Inggris Anda saat ini",
      "Learning Goals (Select at least 3)": "Tujuan Pembelajaran (Pilih setidaknya 3)",
      "Save Profile": "Simpan Profil",
      "Please select at least 3 learning goals.": "Silakan pilih setidaknya 3 tujuan pembelajaran.",
      "Please select your native language.": "Silakan pilih bahasa asli Anda.",
      "Improve Speaking": "Tingkatkan Berbicara",
      "Enhance Reading": "Tingkatkan Membaca",
      "Develop Writing": "Kembangkan Menulis",
      "Boost Listening": "Tingkatkan Mendengarkan",
      "Master Grammar": "Kuasai Tata Bahasa",
      "Expand Vocabulary": "Perluas Kosakata",
      "Practice Conversation": "Latihan Percakapan",
      "Perfect Pronunciation": "Sempurnakan Pengucapan",
      "Beginner": "Pemula",
      "Basic": "Dasar",
      "Intermediate": "Menengah",
      "Competent": "Kompeten",
      "Advanced": "Lanjutan",
      "Expert": "Ahli"
  }
},
sq: {
  translation: {
      "Profile Setup": "Konfigurimi i profilit",
      "Select your native language": "Zgjidhni gjuhën tuaj amtare",
      "Your current English level": "Niveli juaj aktual i anglishtes",
      "Learning Goals (Select at least 3)": "Qëllimet e mësimit (Zgjidhni të paktën 3)",
      "Save Profile": "Ruaj Profilin",
      "Please select at least 3 learning goals.": "Ju lutemi zgjidhni të paktën 3 qëllime mësimi.",
      "Please select your native language.": "Ju lutemi zgjidhni gjuhën tuaj amtare.",
      "Improve Speaking": "Përmirësoni të folurit",
      "Enhance Reading": "Përmirësoni leximin",
      "Develop Writing": "Zhvilloni shkrimin",
      "Boost Listening": "Përmirësoni dëgjimin",
      "Master Grammar": "Zotëroni gramatikën",
      "Expand Vocabulary": "Zgjeroni fjalorin",
      "Practice Conversation": "Praktikoni bisedën",
      "Perfect Pronunciation": "Përmirësoni shqiptimin",
      "Beginner": "Fillestar",
      "Basic": "Bazë",
      "Intermediate": "I ndërmjetëm",
      "Competent": "I aftë",
      "Advanced": "I avancuar",
      "Expert": "Ekspert"
  }
},
mam: {
  translation: {
      "Profile Setup": "Configuración de perfil",
      "Select your native language": "Seleccione su idioma nativo",
      "Your current English level": "Su nivel actual de inglés",
      "Learning Goals (Select at least 3)": "Objetivos de aprendizaje (Seleccione al menos 3)",
      "Save Profile": "Guardar perfil",
      "Please select at least 3 learning goals.": "Seleccione al menos 3 objetivos de aprendizaje.",
      "Please select your native language.": "Seleccione su idioma nativo.",
      "Improve Speaking": "Mejorar el habla",
      "Enhance Reading": "Mejorar la lectura",
      "Develop Writing": "Desarrollar la escritura",
      "Boost Listening": "Mejorar la escucha",
      "Master Grammar": "Dominar la gramática",
      "Expand Vocabulary": "Ampliar el vocabulario",
      "Practice Conversation": "Practicar la conversación",
      "Perfect Pronunciation": "Perfeccionar la pronunciación",
      "Beginner": "Principiante",
      "Basic": "Básico",
      "Intermediate": "Intermedio",
      "Competent": "Competente",
      "Advanced": "Avanzado",
      "Expert": "Experto"
  }
},
ur: {
  translation: {
      "Profile Setup": "پروفائل سیٹ اپ",
      "Select your native language": "اپنی مادری زبان منتخب کریں",
      "Your current English level": "آپ کی موجودہ انگریزی سطح",
      "Learning Goals (Select at least 3)": "سیکھنے کے اہداف (کم از کم 3 منتخب کریں)",
      "Save Profile": "پروفائل محفوظ کریں",
      "Please select at least 3 learning goals.": "براہ کرم کم از کم 3 سیکھنے کے اہداف منتخب کریں۔",
      "Please select your native language.": "براہ کرم اپنی مادری زبان منتخب کریں۔",
      "Improve Speaking": "بولنے میں بہتری",
      "Enhance Reading": "پڑھنے میں بہتری",
      "Develop Writing": "تحریر کی ترقی",
      "Boost Listening": "سننے میں بہتری",
      "Master Grammar": "گرائمر میں مہارت",
      "Expand Vocabulary": "الفاظ کا ذخیرہ بڑھائیں",
      "Practice Conversation": "گفتگو کی مشق کریں",
      "Perfect Pronunciation": "تلفظ کو بہتر بنائیں",
      "Beginner": "ابتدائی",
      "Basic": "بنیادی",
      "Intermediate": "درمیانی",
      "Competent": "ماہر",
      "Advanced": "اعلی",
      "Expert": "ماہر"
  }
},
uk: {
  translation: {
      "Profile Setup": "Налаштування профілю",
      "Select your native language": "Виберіть рідну мову",
      "Your current English level": "Ваш поточний рівень англійської",
      "Learning Goals (Select at least 3)": "Цілі навчання (виберіть щонайменше 3)",
      "Save Profile": "Зберегти профіль",
      "Please select at least 3 learning goals.": "Виберіть щонайменше 3 цілі навчання.",
      "Please select your native language.": "Виберіть рідну мову.",
      "Improve Speaking": "Покращити розмовну мову",
      "Enhance Reading": "Покращити читання",
      "Develop Writing": "Розвивати письмо",
      "Boost Listening": "Покращити сприйняття на слух",
      "Master Grammar": "Опанувати граматику",
      "Expand Vocabulary": "Розширити словниковий запас",
      "Practice Conversation": "Практикувати розмову",
      "Perfect Pronunciation": "Вдосконалити вимову",
      "Beginner": "Початківець",
      "Basic": "Базовий",
      "Intermediate": "Середній",
      "Competent": "Компетентний",
      "Advanced": "Просунутий",
      "Expert": "Експерт"
  }
}

    },
    lng: "en", // Default language
    fallbackLng: "en",
  });

const languages = [
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'pt', name: 'Português', flag: '🇵🇹' },
  { code: 'ru', name: 'Pусский', flag: '🇷🇺' },
  { code: 'zh', name: '中文', flag: '🇨🇳' },
  { code: 'ja', name: '日本語', flag: '🇯🇵' },
  { code: 'ko', name: '한국어', flag: '🇰🇷' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦' },
  { code: 'hi', name: 'हिंदी', flag: '🇮🇳' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
  { code: 'sv', name: 'Svenska', flag: '🇸🇪' },
  { code: 'he', name: 'עברית', flag: '🇮🇱' },
  { code: 'vi', name: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'ta', name: 'தமிழ்', flag: '🇱🇰' },
  { code: 'bn', name: 'বাংলা', flag: '🇧🇩' },
  { code: 'fil', name: 'Filipino', flag: '🇵🇭' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
  { code: 'so', name: 'Soomaali', flag: '🇸🇴' },
  { code: 'ht', name: 'Kreyòl Ayisyen', flag: '🇭🇹' },
  { code: 'id', name: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'sq', name: 'Shqip', flag: '🇦🇱' },
  { code: 'mam', name: 'Mam', flag: '🇬🇹' },
  { code: 'ur', name: 'اردو', flag: '🇵🇰' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' },
];

const experienceLevels = ['Beginner', 'Basic', 'Intermediate', 'Competent', 'Advanced', 'Expert'];

const learningGoals = [
  { id: 'speaking', label: 'Improve Speaking' },
  { id: 'reading', label: 'Enhance Reading' },
  { id: 'writing', label: 'Develop Writing' },
  { id: 'listening', label: 'Boost Listening' },
  { id: 'grammar', label: 'Master Grammar' },
  { id: 'vocabulary', label: 'Expand Vocabulary' },
  { id: 'conversation', label: 'Practice Conversation' },
  { id: 'pronunciation', label: 'Perfect Pronunciation' },
];

const ProfileSetup = () => {
  const { t, i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState('');
  const [experienceLevel, setExperienceLevel] = useState(0);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [isFormValid, setIsFormValid] = useState(false);
  const [showGoalWarning, setShowGoalWarning] = useState(false);
  const rangeRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setIsFormValid(selectedLanguage !== '' && selectedGoals.length >= 3);
    setShowGoalWarning(selectedGoals.length > 0 && selectedGoals.length < 3);
  }, [selectedLanguage, selectedGoals]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getBackgroundColor = () => {
    const maxScroll = document.body.scrollHeight - window.innerHeight;
    const scrollFraction = scrollY / maxScroll;
    const startColor = [95, 91, 81];
    const endColor = [175, 225, 175];
    const resultColor = startColor.map((start, i) => Math.round(start + scrollFraction * (endColor[i] - start)));
    return `rgb(${resultColor.join(',')})`;
  };

  const handleLanguageChange = (langCode) => {
    setSelectedLanguage(langCode);
    i18n.changeLanguage(langCode);
  };

  const handleGoalToggle = (goalId) => {
    setSelectedGoals(prevGoals =>
      prevGoals.includes(goalId)
        ? prevGoals.filter(id => id !== goalId)
        : [...prevGoals, goalId]
    );
  };

  const handleSaveProfile = () => {
    if (isFormValid) {
      console.log('Profile saved', { selectedLanguage, experienceLevel, selectedGoals });
      navigate('/chat');
    }
  };

  const handleRangeChange = (e) => {
    setExperienceLevel(parseInt(e.target.value));
  };

  const handleRangeMouseUp = () => {
    const closestLevel = Math.round(rangeRef.current.value);
    setExperienceLevel(closestLevel);
  };

  return (
    <div className="min-h-screen flex justify-center p-4" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl my-8">
        <h1 className="text-8xl font-bold mb-8 text-[#386641] text-center">{t('Profile Setup')}</h1>
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">{t('Select your native language')}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 bg-[#f2e8cf] rounded-lg p-4">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`flex items-center justify-center p-4 rounded-lg transition-all ${
                  selectedLanguage === lang.code
                    ? 'bg-[#386641] text-white'
                    : 'bg-white text-[#386641] hover:bg-[#a7c957] hover:text-white'
                }`}
              >
                <span className="text-2xl mr-2">{lang.flag}</span>
                <span className="font-medium text-2xl">{lang.name}</span>
              </button>
            ))}
          </div>
        </div>
       
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">{t('Your current English level')}</h2>
          <input
            type="range"
            min="0"
            max="5"
            value={experienceLevel}
            onChange={handleRangeChange}
            onMouseUp={handleRangeMouseUp}
            ref={rangeRef}
            className="w-full h-2 bg-[#A7C957] rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-2">
            {experienceLevels.map((level, index) => (
              <span key={level} className={`text-sm ${index === experienceLevel ? 'text-[#386641] font-bold' : 'text-[#6A994E]'}`}>
                {t(level)}
              </span>
            ))}
          </div>
        </div>
       
        <div className="mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-[#386641]">{t('Learning Goals (Select at least 3)')}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {learningGoals.map((goal) => (
              <label key={goal.id} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedGoals.includes(goal.id)}
                  onChange={() => handleGoalToggle(goal.id)}
                  className="form-checkbox h-5 w-5 text-[#A7C957] rounded focus:ring-[#6A994E]"
                />
                <span className="text-[#386641]">{t(goal.label)}</span>
              </label>
            ))}
          </div>
          {showGoalWarning && (
            <p className="text-[#bc4749] mt-2">{t('Please select at least 3 learning goals.')}</p>
          )}
        </div>
       
        <button
          className={`w-full py-3 px-4 rounded-lg transition-colors text-lg font-semibold ${
            isFormValid
              ? 'bg-[#A7C957] text-white hover:bg-[#6A994E]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleSaveProfile}
          disabled={!isFormValid}
        >
          {t('Save Profile')}
        </button>
        {!isFormValid && selectedLanguage === '' && (
          <p className="text-[#bc4749] mt-2 text-center">{t('Please select your native language.')}</p>
        )}
      </div>
    </div>
  );
};

export default ProfileSetup;