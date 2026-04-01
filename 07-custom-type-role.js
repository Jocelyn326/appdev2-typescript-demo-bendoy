"use strict";
(() => {
    let userRole = 'admin';
    console.log('userRole:', userRole);
    // @ts-expect-error
    userRole = 'teacher'; // Error: Type '"teacher"' is not assignable to type 'UserRole'.
    // @ts-expect-error
    userRole = 0; // Error: Type '0' is not assignable to type 'UserRole'.
    function access(role) {
        console.log('access role:', role);
        role = 'superadmin'; // OK
        role = 'admin'; // OK
        // @ts-expect-error
        role = 0; // Error: Type '0' is not assignable to type 'UserRole'.
        // @ts-expect-error
        role = true; // Error: Type 'true' is not assignable to type 'UserRole'.
        // @ts-expect-error
        role = 'teacher'; // Error: Type '"teacher"' is not assignable to type 'UserRole'.
    }
    access('admin');
    access('moderator');
})();
