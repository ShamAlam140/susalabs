import { redirect } from 'next/navigation';

// Redirect old route to new route
export default function CookiesPolicyRedirect() {
    redirect('/cookies-policy');
}
