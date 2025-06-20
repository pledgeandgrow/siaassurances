"use client";

import { useState, useRef, useEffect } from 'react';

// Types pour les messages et les questions fréquentes
type Message = {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
};

type FAQ = {
  question: string;
  answer: string;
  keywords: string[];
};

// Base de données de questions fréquentes
const faqs: FAQ[] = [
  {
    question: "Qu'est-ce que l'assurance décennale ?",
    answer: "L'assurance décennale est une garantie obligatoire pour tous les professionnels du bâtiment. Elle couvre les dommages qui compromettent la solidité de l'ouvrage ou le rendent impropre à sa destination pendant 10 ans après la réception des travaux.",
    keywords: ['décennale', 'garantie', 'obligatoire', 'bâtiment', 'dommages', 'solidité', 'ouvrage', '10 ans', 'réception', 'travaux']
  },
  {
    question: "Comment obtenir un devis d'assurance ?",
    answer: "Pour obtenir un devis, vous pouvez utiliser notre formulaire en ligne dans la section 'Devis', nous appeler au numéro indiqué sur notre site, ou nous envoyer un email avec les détails de votre activité et vos besoins en assurance.",
    keywords: ['devis', 'obtenir', 'formulaire', 'appeler', 'email', 'activité', 'besoins', 'assurance']
  },
  {
    question: "Quels sont les délais pour obtenir une assurance ?",
    answer: "Les délais varient selon le type d'assurance et la complexité de votre situation. En général, nous pouvons vous fournir un devis sous 24 à 48 heures, et l'assurance peut être mise en place en quelques jours après acceptation du devis.",
    keywords: ['délais', 'obtenir', 'assurance', 'devis', '24', '48', 'heures', 'jours', 'acceptation']
  },
  {
    question: "Quelles sont les garanties incluses dans l'assurance RC Pro ?",
    answer: "L'assurance RC Pro (Responsabilité Civile Professionnelle) couvre généralement les dommages causés aux tiers dans le cadre de votre activité professionnelle, y compris les dommages matériels, corporels et immatériels. Les garanties spécifiques dépendent de votre contrat et peuvent inclure la protection juridique, les dommages aux biens confiés, etc.",
    keywords: ['garanties', 'incluses', 'RC Pro', 'Responsabilité Civile Professionnelle', 'dommages', 'tiers', 'activité', 'professionnelle', 'matériels', 'corporels', 'immatériels', 'protection juridique', 'biens confiés']
  },
  {
    question: "Comment déclarer un sinistre ?",
    answer: "Pour déclarer un sinistre, contactez-nous dès que possible par téléphone ou email. Vous devrez fournir votre numéro de contrat, la date et les circonstances du sinistre, ainsi que toute documentation pertinente (photos, devis de réparation, etc.). Nous vous guiderons ensuite tout au long du processus.",
    keywords: ['déclarer', 'sinistre', 'contacter', 'téléphone', 'email', 'numéro', 'contrat', 'date', 'circonstances', 'documentation', 'photos', 'devis', 'réparation', 'processus']
  }
];

// Fonction pour trouver la réponse la plus pertinente
const findBestAnswer = (query: string): string => {
  // Convertir la requête en minuscules et la nettoyer
  const cleanQuery = query.toLowerCase().trim();
  
  // Calculer un score pour chaque FAQ basé sur la correspondance des mots-clés
  const scoredFaqs = faqs.map(faq => {
    let score = 0;
    
    // Vérifier si la question contient exactement la requête
    if (faq.question.toLowerCase().includes(cleanQuery)) {
      score += 10;
    }
    
    // Vérifier les mots-clés
    const queryWords = cleanQuery.split(/\s+/);
    queryWords.forEach(word => {
      if (word.length > 2) { // Ignorer les mots très courts
        faq.keywords.forEach(keyword => {
          if (keyword.toLowerCase().includes(word)) {
            score += 1;
          }
        });
      }
    });
    
    return { faq, score };
  });
  
  // Trier par score et prendre la meilleure correspondance
  const bestMatch = scoredFaqs.sort((a, b) => b.score - a.score)[0];
  
  // Si le score est trop bas, donner une réponse par défaut
  if (bestMatch.score < 2) {
    return "Je ne suis pas sûr de comprendre votre question. Pourriez-vous la reformuler ou consulter notre FAQ pour plus d'informations ? Vous pouvez également nous contacter directement pour une assistance personnalisée.";
  }
  
  return bestMatch.faq.answer;
};

// Composant principal du chatbot
const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'assistant virtuel de SIA Assurances. Comment puis-je vous aider aujourd'hui ?",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Faire défiler vers le bas lorsque de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Gérer l'envoi d'un message
  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;
    
    // Ajouter le message de l'utilisateur
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    // Simuler un délai de réponse du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: findBestAnswer(userMessage.text),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };
  
  // Gérer la touche Entrée
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  // Suggestions de questions rapides
  const quickQuestions = [
    "Qu'est-ce que l'assurance décennale ?",
    "Comment obtenir un devis ?",
    "Comment déclarer un sinistre ?"
  ];
  
  return (
    <div className="fixed bottom-22  right-6 z-50">
      {/* Bouton du chatbot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 cursor-pointer hover:bg-blue-700 text-white rounded-full p-4 shadow-lg flex items-center justify-center transition-all duration-300"
        aria-label={isOpen ? "Fermer le chat" : "Ouvrir le chat"}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
        )}
      </button>
      
      {/* Fenêtre du chat */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col max-h-[500px] transition-all duration-300">
          {/* En-tête */}
          <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
              </div>
              <h3 className="font-medium">Assistant SIA</h3>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200"
              aria-label="Fermer le chat"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          
          {/* Corps du chat */}
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start mb-4">
                <div className="bg-gray-100 rounded-lg p-3 max-w-[80%]">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
          
          {/* Questions rapides */}
          <div className="px-4 py-2 border-t border-gray-200">
            <p className="text-xs text-gray-500 mb-2">Questions fréquentes :</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {quickQuestions.map((question, index) => (
                <button
                  key={index}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs py-1 px-2 rounded-full transition-colors"
                  onClick={() => {
                    setInputValue(question);
                    // Option: auto-send after selection
                    // setInputValue('');
                    // const userMessage = { id: messages.length + 1, text: question, sender: 'user', timestamp: new Date() };
                    // setMessages(prev => [...prev, userMessage]);
                    // // Rest of the send logic...
                  }}
                >
                  {question}
                </button>
              ))}
            </div>
          </div>
          
          {/* Zone de saisie */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 border border-gray-300 text-gray-800 rounded-l-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={inputValue.trim() === ''}
                className={`bg-blue-600 hover:bg-blue-700 text-white-50 rounded-r-lg py-2 px-4 ${
                  inputValue.trim() === '' ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                }`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
