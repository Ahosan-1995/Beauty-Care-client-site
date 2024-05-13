

const ManageService = () => {
    return (
        <div>
            
            <div className="p-10">
            <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                        <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Stock</th>
                            <th>Action</th>
                            <th>Update</th>
                        </tr>
                        </thead>

                        <tbody>
{/* row 1 */}
                            <tr>
                                <td>Name</td>
                                <td>Price</td>
                                <td>Rating</td>
                                <td>Stock</td>
                                <td><button>Delete</button></td>
                                <td><button>Update</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>


            
        </div>
    );
};

export default ManageService;