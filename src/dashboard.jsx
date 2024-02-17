import { useUserContext } from "./store/userContext";
import { useState } from "react";
import Pagination from "./pagination";
import DisplayBar from "./displaybar";
import { AiOutlineLoading } from "react-icons/ai";
export function Dashboard() {
    const { users } = useUserContext();

    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);
    const [selectedUser, setSelectedUser] = useState(null);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = users.slice(firstPostIndex, lastPostIndex);

    const handleDetailsClick = (user, e) => {
        e.preventDefault()
        setSelectedUser(user);
    };


    return (
        <>
        {users.length === 0 && (
                <div className="text-center">
                    <AiOutlineLoading className="moving-icon" />
                    <p>Loading...</p>
                </div>
            )}

            {users.length > 0 && currentPosts.map((user) => (
                <div key={user.createdAt} className="d-flex align-items-start">
                    <div className="card d-flex" style={{ width: "30rem", margin: "2rem" }}>
                        <div class="container text-center">
                            <div class="row align-items-start">
                                <div class="col">
                                    <img src={user.avatar} className="card-img-top" alt="No image" style={{ borderRadius: "50%", objectFit: "cover", width: "80%", height: "80%", marginTop: "1rem" }} />
                                </div>
                                <div class="col">
                                    <div className="card-body">
                                        <h5 className="card-title">{user.profile.firstName} {user.profile.lastName}</h5>
                                        <p className="card-text">Username: {user.profile.username}</p>
                                        <p className="card-text">Job title: {user.jobTitle}</p>
                                        <a href="#" className="btn btn-primary" onClick={(e) => handleDetailsClick(user, e)}>Details</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-grow-1">
                        {selectedUser && selectedUser.createdAt === user.createdAt && (
                            <DisplayBar>
                                <div className="mx-3">
                                    <header className="d-flex justify-content-around">
                                        <h2>User Details</h2>
                                        <button type="button" className="btn-close" aria-label="Close" onClick={() => {
                                            setSelectedUser(null)
                                        }}></button>
                                    </header>
                                    <img src={selectedUser.avatar} alt="No image" style={{}} />
                                    <ul>
                                        <li>First Name: {selectedUser.profile.firstName}</li>
                                        <li>Last Name: {selectedUser.profile.lastName}</li>
                                        <li>Username: {selectedUser.profile.username}</li>
                                        <li>Job Title: {selectedUser.jobTitle}</li>
                                        <li>Bio: {selectedUser.Bio}</li>
                                    </ul>
                                </div>
                            </DisplayBar>
                        )}
                    </div>
                </div>
            ))}

            <Pagination
                totalPosts={users.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </>
    )
}