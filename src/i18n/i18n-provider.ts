import chineseMessages from 'ra-language-chinese';
import englishMessages from 'ra-language-english';

const messages = {
    'cn': chineseMessages,
    'en': englishMessages,
};

export default locale => messages[locale]
