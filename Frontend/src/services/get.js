import request from './request';

const getEmployees      = () => request.get('/employee');
const getCommunity      = () => request.get('/community')
const getAllEvents      = () => request.get('/event')
const getDeclineEvents  = () => request.get('/event/decline')
const getApprovedEvents = () => request.get('/event/approved')
const getCategory = () => request.get('/category')
const getEventsApprovedUser = (id) => request.get(`/event/approved/${id}`)
const getEventsPendingUser = (id) => request.get(`/event/pending/${id}`)
const getEventsDeclineUser = (id) => request.get(`/events/decline/${id}`)
export 
{
    getEmployees,
    getCommunity,
    getAllEvents,
    getDeclineEvents,
    getApprovedEvents,
    getCategory,
    getEventsApprovedUser,
    getEventsPendingUser,
    getEventsDeclineUser
};