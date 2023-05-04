import { Message, User } from "./pocketbase";

function compareMessages(a: Message, b: Message) {
    if (!a && b) {
        return 1;
    } else if (a && !b) {
        return -1;
    } else if (!a && !b) {
        return 0;
    } else if (a.created > b.created) {
        return -1;
    } else if (a.created < b.created) {
        return 1;
    } else {
        return 0;
    }
}

export function getLatestMessage(username: string, messages: Message[]) {
    const filteredMessages = messages!.filter((m) => m.sender === username || m.receiver === username);

    return filteredMessages.sort((a, b) => compareMessages(a, b))[0];
}

export function sortUsers(users: User[], messages: Message[]) {
    return users.slice().sort((a, b) => {
        const latestA = getLatestMessage(a.username, messages);
        const latestB = getLatestMessage(b.username, messages);

        if (!latestA && latestB) {
            return 1;
        } else if (latestA && !latestB) {
            return -1;
        } else if (!latestA && !latestB) {
            return 0;
        } else {
            return compareMessages(latestA, latestB);
        }
    });
}