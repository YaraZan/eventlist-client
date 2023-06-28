import { UserAPIINstance, EventAPIINstance, OrganisationAPIINstance, EntryAPIINstance } from "..";

export const EventlistAPI = {
    
    /**
     * Function that creates a user. Takes 3 arguments: name, email, password. Returns status code.
     * @param {String} name 
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<AxiosResponse<any>>}
     */
    create(name, email, password) {
        const url = '/create_user.php';
        const data = { name: name, email: email, password: password };
        return UserAPIINstance.post(url, data)
    },

    /**
     * Function for client session token. Takes 2 arguments: email, password. Returns status code and token.
     * @param {String} email 
     * @param {String} password 
     * @returns {Promise<AxiosResponse<any>>}
     */
    login(email, password) {
        const url = '/login.php';
        const data = { email: email, password: password };
        return UserAPIINstance.post(url, data);
    },

    validate(token) {
        const url = '/validate_token.php';
        const data = { token: token };
        return UserAPIINstance.post(url, data);
    },


    // EVENTS METHODS

    get_all_events() {
        const url = '/read.php';
        return EventAPIINstance.get(url);
    },

    get_single_event(public_id) {
        const url = `/read_single.php?public_id=${public_id}`;
        return EventAPIINstance.get(url);
    },

    get_events_by_organisation(organisation) {
        const url = '/read_by_organisation.php';
        const data = { organisation: organisation };
        return EventAPIINstance.post(url, data);
    },

    // EVENT ENTRIES METHODS

    get_entries_by_event(event) {
        const url = '/read_by_event.php';
        const data = { event: event };
        return EntryAPIINstance.post(url, data);
    },


    // ORGANISATION METHODS

    get_all_organisations() {
        const url = '/read.php';
        return OrganisationAPIINstance.get(url);
    },

    get_by_user_id(creator) {
        const url = '/read_by_user_id.php';
        const data = { creator: creator };
        return OrganisationAPIINstance.post(url, data);
    },

    get_single_organisation(public_id) {
        const url = `/read_single.php?public_id=${public_id}`;
        return OrganisationAPIINstance.get(url);
    },


    // USER METHODS

    get_single_user(public_id) {
        const url = `/read_single.php?public_id=${public_id}`;
        return UserAPIINstance.get(url);
    },
}