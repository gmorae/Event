import request from './request';

const getEmployees      = () => request.get('/employee');
const getCommunity      = () => request.get('/community')
const getAllEvents      = () => request.get('/event')
const getDeclineEvents  = () => request.get('/event/decline')
const getApprovedEvents = () => request.get('/event/approved')
const getCategory = () => request.get('/category')
const getAllEventsUser = () => request.get('/event')
const getEventsPending = () => request.get('/event/pending')
export 
{
    getEmployees,
    getCommunity,
    getAllEvents,
    getDeclineEvents,
    getApprovedEvents,
    getCategory,
    getAllEventsUser,
    getEventsPending
};