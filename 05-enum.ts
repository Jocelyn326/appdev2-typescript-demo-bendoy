(() => {
    enum Role {
        // SuperAdmin,
        SuperAdmin = 1,
        Admin = 2,
        // Teacher,
        Teacher = 3,
        // Student,
        Student = 4,
    }
    
    
    let userRole: Role = 4;
    console.log(Role[userRole]);
})();