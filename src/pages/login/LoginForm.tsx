﻿import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AppRoutes } from '../../Constants';
import { AuthData } from '../../entities/AuthData';
import { loginAndFetchFavorites } from '../../store/ApiActions';
import { useAppDispatch } from '../../store/hooks';

export function LoginForm() {
  const [formData, setFormData] = useState<AuthData>({
    login: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  const login = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginAndFetchFavorites(formData));
    navigate(AppRoutes.Main);
  };

  return (
    <form className="login__form form" onSubmit={login}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input
          className="login__input form__input"
          type="email"
          name="login"
          placeholder="Email"
          onChange={handleFormChange}
          value={formData.login}
          data-testid="login-form__login"
          required
        />
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input
          className="login__input form__input"
          type="password" // TODO: password validation
          name="password"
          placeholder="Password"
          onChange={handleFormChange}
          value={formData.password}
          data-testid="login-form__password"
          required
        />
      </div>
      <button
        className="login__submit form__submit button"
        type="submit"
        data-testid="login-form__submit-button"
      >
        Sign in
      </button>
    </form>
  );
}
