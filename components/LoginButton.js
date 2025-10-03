import supabase from '../lib/supabaseClient';

const LoginButton = () => {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'github' });
  };

  return (
    <button onClick={handleLogin}>
      Sign in with GitHub
    </button>
  );
};

export default LoginButton;
