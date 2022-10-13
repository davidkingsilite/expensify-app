import { setStartDate, setEndDate, sortByDate , sortByAmount, setTextFilter} from "../../actions/filters";
import moment from "moment";

test('shoud generate set startDate action object',  ()=>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    });
});

test('should generate set endDate action object',  ()=>{
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0)
    });
});

test('should generate sortBy date action object', ()=> {
 const action = sortByDate();
 expect(action).toEqual({
        type: 'SORT_BY_DATE',
   });
});

test('should generate sortBy amount action object', ()=> {
const action = sortByAmount();
expect(action).toEqual({
        type: 'SORT_BY_AMOUNT',      
  });
});

test('should generate settextfilter date action object', ()=> {
const text = 'Something in';
const action = setTextFilter(text);
expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text
  });
});

test('should generate settext filter with default value action object', ()=> {
const action = setTextFilter();
expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
});
});
