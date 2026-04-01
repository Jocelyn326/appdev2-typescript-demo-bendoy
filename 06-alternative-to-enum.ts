(() => {
    // Literal Types (Alternative to Enum)
    type UserRole = 'admin' | 'guest' | 'teacher' | 'student';
   
    let userRole: UserRole = 'admin';

    userRole = 'guest';    // anotherUserRole = 'superadmin'

    let anotherUserRole: UserRole = 'admin';

    function access(role: UserRole) {
        if (role === 'admin') {
            console.log('Full access');
        } else {
            console.log('Limited access');
        }
    }

    access(userRole)
    access(anotherUserRole)
})()