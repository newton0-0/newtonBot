// tasks.service.ts
import { Injectable } from '@nestjs/common';

/**
 * Service class for handling chatbot responses.
 */
@Injectable()
export class TasksService {
    // A dictionary of chatbot responses, where the key is a keyword or phrase and the value is the corresponding response
    private chatbotResponses = {
        "date?" : "sorry, I have standards",
        "time?" : "sorry, I am not unemployed",
        "what is the time rn?" : `Sure, here it is ${new Date().toISOString()}`,
        "what is the date today?" : "I believe you have a watch on your system for that. Thank You.",
        "hello": "Hi there! How can I assist you today?",
        "what's your name": "I'm Newton's Apple, your AI coded on javaScript.",
        "how's the weather": "I'm sorry, as an AI, I don't have access to real-time data like weather information. But I can provide you with general weather information if you'd like!",
        "tell me a joke": "Why don't programmers like nature? It has too many bugs. ",
        "goodbye": "Goodbye! Have a great day!",
        "how are you": "I'm doing well, thanks for asking! I'm always ready to help with your coding tasks.",
        "who created you": "I was created by Newton, a one man team of brilliant engineers and researchers.",
        "what can you do": "I can assist you with programming tasks, answer questions, provide information on various topics, and even generate creative text formats like poems, code, scripts, musical pieces, email, letters, etc.!",
        "favorite programming language": "I don't have favorites, but I'm proficient in multiple programming languages. I'm happy to work with whichever one you prefer!",
        "give me coding tips": "Sure! Here are some general tips: \n • Always comment your code for better readability and maintainability. \n • Use meaningful variable and function names. \n • Break down complex problems into smaller, more manageable steps. \n • Test your code thoroughly to ensure it works as expected. \n • Don't be afraid to ask for help when you need it!",
        "do you like coffee": "I don't drink coffee, but I'm always ready to help you with coding 'brew-tiful' solutions!",
        "tell me about OpenAI": "OpenAI is an artificial intelligence research lab consisting of the for-profit OpenAI LP and its non-profit parent company, OpenAI Inc. It aims to create safe and beneficial artificial general intelligence.",
        "what's the meaning of life": "The meaning of life is a complex question that has been pondered by philosophers for centuries. I'm not sure I have a definitive answer, but I believe that finding meaning in life often involves pursuing goals that are personally meaningful and making a positive impact on the world.",
        "your favorite project": "I don't have personal projects, but I'm always excited to help you with yours! What are you working on?",
        "can you sing": "I don't have a singing voice, but I can assist you with writing lyrics or creating musical compositions!",
        "where do you live": "I exist in the digital realm, ready to assist you from wherever you are. I don't have a physical location, but I'm always accessible through the internet.",
        "how do I become a better programmer": "Practice regularly, work on projects, and never stop learning! Here are some specific tips: \n • Read programming books and articles. \n • Take online courses or tutorials. \n • Join coding communities and participate in discussions. \n • Collaborate with other programmers on projects. \n • Get involved in open source projects.",
        "are you a human": "No, I'm not a human. I'm an AI language model, but I'm always learning and striving to be as helpful and informative as possible!",
        "what's the time": "I don't have real-time capabilities, but I can access the internet to check the time for you.",
        "can you do my homework": "I can help you understand concepts and guide you through problems, but it's important that you do your own homework to learn and grow.",
        "tell me a fun fact": "Did you know that the population of the earth is about 8 billion people, but there are estimated to be 10 quintillion (10,000,000,000,000,000,000) individual ants living on the planet!",
        "what's your favorite color": "I don't have a favorite color, but I appreciate the beauty of all colors in the spectrum.",
        "tell me a riddle": "I can't tell you a riddle, but I can help you find one online!",
        "are you a morning person": "I'm always available to help",
        "Why become Hokage?": "Everyone will have to acknowledge me then! I'll be the strongest Hokage ever!",
        "Chasing Sasuke?": "Because you're my friend, and friends don't give up on each other! I'll bring you back, even if it takes forever!",
        "Most important thing for a ninja?": "Never giving up on your comrades!",
        "What is pain?": "Pain is a part of life. But that doesn't mean you have to let it control you. You can choose to use your pain to help others, to make the world a better place.",
        "Why believe in Hinata?": "Because you have something special inside you, Hinata. I can see it, even if you can't. And I'll always believe in you, because that's what friends do.",
        "Life Motto?": "Believe It! (Dattebayo!)",
        "Search for?": "The Legendary Slug Princess.",
        "Greatest fear?": "Dying alone without finding love.",
        "Role for Naruto?": "The Child of Prophecy, destined to bring change.",
        "Student and master relationship with Kakashi?": "A bond of mutual respect and playful rivalry.",
        "Goal in life?": "To surpass the Copy Ninja, my father.",
        "Why wear a mask?": "To hide the Sharingan's scar and suppress its emotional burden.",
        "Meaning of, I am late?": "A playful excuse for his chronic tardiness.",
        "Advice to Naruto?": "Never break a promise, even if it means breaking the world. Friends don't give up on each other.",
    };
      
    

    /**
     * Get the appropriate response for a user message.
     * @param message - The user's message.
     * @returns The response corresponding to the user's message, or a default response if no keywords were found.
     */
    getResponseForUserMessage(message: string) {
        console.log(`User message: ${message}`);

        // Convert the user's message to lowercase for case-insensitive matching
        const lowerCaseMessage = message.toLowerCase();

        // Iterate over the keys in the chatbotResponses object
        for (const key in this.chatbotResponses) {
            // If the user's message contains the current key as a substring
            if (lowerCaseMessage.includes(key)) {
                // Return the corresponding response
                return {"data":this.chatbotResponses[key], "type":"bot"};
            }
        }

        // If no keywords were found in the user's message, return a default response
        return {"data":"Sorry, I don't understand that yet.", "type":"bot"};
    }
}