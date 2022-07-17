import {useState, useCallback} from 'react';
import './styles.css';
import { useQuery, useMutation } from '@apollo/client';
import { CREATE_LEAD } from '../../../home/queries';
import { GET_CLIENTS_QUERY } from '../../../home/queries';
import closeIcon from '../../../../assets/closeIcon.svg';

const emptyClientState = {
    Name: '',
    email: '',
    Source: null,
    Status: null,
    Notes: '',
    Time: null,
    date: null,
};


function Modal({ closeModal }) {
    const [ createLead ] = useMutation(CREATE_LEAD);
    const [detailsObject, setDetailsObject] = useState(emptyClientState);
    const {
        data: getClients,
        refetch: refetchCreateLead,
      } = useQuery(GET_CLIENTS_QUERY);

    const close = () => {
       closeModal(false);
    }
    const changeHandler = useCallback((type) => (e) => {
        const value = e.target ? e.target.value : e;
        setDetailsObject({ ...detailsObject, [type]: value });
    }, [detailsObject]);

    const submitHandler = async (e) => {
        e.preventDefault();

        const data = {
            Name: detailsObject.Name,
            email: detailsObject.email,
            Notes: detailsObject.Notes,
            Status: detailsObject.Status,
            Source: detailsObject.Source,
        };
    
        const createDetailsResponse = await createLead({ variables: { data } });
    
        if (!createDetailsResponse.error) {
          refetchCreateLead();
        }
    
        setDetailsObject(detailsObject);
        closeModal(false);
      };

    return (
        <div className='form_modal'>
            <div className="header">Lead</div>
            <div className='close_button' >
                  <img src={closeIcon} alt="close" onClick={close}/>
                </div>
        <div className="modal-body col-6">
            <form onSubmit={submitHandler}>
                <div className="form-group">
                
                    <label htmlFor="exampleFormControlSelect1">Status</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={detailsObject.Status}
                                onChange={changeHandler('Status')}>
                        <option>New</option>
                        <option>Interested</option>
                        <option>Follow_up</option>
                        <option>Negative</option>
                        <option>Enrolled</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Source</label>
                    <select className="form-control" id="exampleFormControlSelect1" value={detailsObject.Source}
                                label="Source"
                                onChange={changeHandler('Source')}>
                        <option>website</option>
                        <option>google</option>
                        <option>my_app</option>
                        <option>word_of_mouth</option>
                    </select>
                </div>
                <h4>Lead Details</h4>
                <hr />
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter name"
                      name='Name'
                      onChange={changeHandler('Name')}
                      value={detailsObject.Name || ''}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlInput1">Email</label>
                    <input type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter email"
                      name='email'
                      onChange={changeHandler('email')}
                      value={detailsObject.email || ''}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Notes</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      onChange={changeHandler('Notes')}
                      value={detailsObject.Notes || ''}
                      placeholder="Notes">
                    </textarea>
                </div>
                <button
                  type="button"
                  class="btn btn-success"
                  onClick={(e) => submitHandler(e)}
                >
                    SAVE
                </button>
            </form>
        </div>
        </div>
    )
}

export default Modal;
