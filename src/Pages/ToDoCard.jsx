import React from 'react';

const ToDoCard = ({bookData}) => {
    return (
      
            <tr>
                                    
                    <td>{bookData.provider_name}</td>
                    <td>{bookData.service_area}</td>
                    <td>{bookData.service_name}</td>
                    <td>{bookData.price}</td>
                    <td>{bookData.pending}</td>
                                    
            </tr>
        
    );
};

export default ToDoCard;