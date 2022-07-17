import { useQuery } from '@apollo/client';
import { GET_CLIENTS_QUERY } from '../../../home/queries';
import closeIcon from '../../../../assets/closeIcon.svg';

function ViewModal({clientCurrentId, closeModal}) {
  const { data: getClients } = useQuery(GET_CLIENTS_QUERY);

  const close = () => {
    closeModal(false);
  }

  return (
    <div className='form_modal'>
            <div className="header">Lead</div>
            <div className='close_button' >
                  <img src={closeIcon} alt="close" onClick={close}/>
            </div>
        <div className="modal-body col-6">
          {getClients ? getClients.leads.data.map((currValue) => {
            if ( currValue.id == clientCurrentId ) {
            return(
               <form>
               <div className="form-group">
                   <label htmlFor="exampleFormControlSelect1">Status</label>
                   <select className="form-control" id="exampleFormControlSelect1" 
                               value={ currValue.attributes.Status }
                               disabled={true}
                               >
                       <option>New</option>
                       <option>Interested</option>
                       <option>Follow_up</option>
                       <option>Negative</option>
                       <option>Enrolled</option>
                   </select>
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlSelect1">Source</label>
                   <select className="form-control" id="exampleFormControlSelect1" 
                   value={currValue.attributes.Source}
                               label="Source"
                               disabled={true}
                               >
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
                     value={currValue.attributes.Name || ''}
                     disabled={true}
                   />
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlInput1">Email</label>
                   <input type="email"
                     className="form-control"
                     id="exampleFormControlInput1"
                     placeholder="Enter email"
                     name='email'
                     value={currValue.attributes.email || ''}
                     disabled={true}
                   />
               </div>
               <div className="form-group">
                   <label htmlFor="exampleFormControlTextarea1">Notes</label>
                   <textarea
                     className="form-control"
                     id="exampleFormControlTextarea1"
                     rows="3"
                     value={currValue.id === clientCurrentId && currValue.attributes.Notes || ''}
                     placeholder="Notes"
                     disabled={true}
                     >
                   </textarea>
               </div>
               <button
                 type="button"
                 class="btn btn-success"
                 disabled={true}
               >
                   SAVE
               </button>
           </form>)}
          }): null}

        </div>
        </div>
  )
}

export default ViewModal;
