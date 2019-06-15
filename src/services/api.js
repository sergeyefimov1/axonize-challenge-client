const server = 'https://axonize-challenge.herokuapp.com';

const getAllMessages = function() {
    return fetch(`${server}/api/get_all_messages`).then((response) => response.json());
};

const newMessage = function(message_obj) {
    return fetch(`${server}/api/new_message`, {
        method: 'post',
        body: JSON.stringify({message_obj}),
        headers: {
            "Content-Type": "application/json"
        }
    });
};

export {getAllMessages, newMessage};
