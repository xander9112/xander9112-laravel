<?php

namespace App\Http\Controllers\Auth;

use App\User;
use Validator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Foundation\Auth\AuthenticatesAndRegistersUsers;

class AuthController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Registration & Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users, as well as the
    | authentication of existing users. By default, this controller uses
    | a simple trait to add these behaviors. Why don't you explore it?
    |
    */

    use AuthenticatesAndRegistersUsers, ThrottlesLogins;

    /**
     * Where to redirect users after login / registration.
     *
     * @var string
     */
    protected $redirectTo = '/';

    protected $redirectPath = '/tasks';

    protected $maxLoginAttempts = 2;

    /**
     * Create a new authentication controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware($this->guestMiddleware(), ['except' => 'logout']);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => 'required|max:255',
            'email' => 'required|email|max:255|unique:users',
            'password' => 'required|min:6|confirmed',
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array $data
     * @return User
     */
    protected function create(array $data)
    {
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),
        ]);
    }

    public function postLogin(Request $request)
    {
        return $this->login($request);
    }

    public function getLogout(Request $request)
    {
        if ($request->ajax()) {
            Auth::guard($this->getGuard())->logout();

            return response()->json(['data' => array(
                'success' => true,
                'message' => 'Logout success',
                'user' => ''
            )]);
        } else {
            return $this->logout();
        }
    }

    public function getLogin(Request $request)
    {
        if ($request->ajax()) {
            if (Auth::check()) {
                return response()->json(['data' => array(
                    'success' => true,
                    'message' => 'Authorize success',
                    'user' => Auth::user()
                )]);
            }
        } else {
            return $this->login($request);
        }
    }

    public function login(Request $request)
    {
        $this->validateLogin($request);

        $throttles = $this->isUsingThrottlesLoginsTrait();

        if ($throttles && $lockedOut = $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            if ($request->ajax()) {
                $seconds = $this->secondsRemainingOnLockout($request);
                return response()->json(['data' => array('message' => $this->getLockoutErrorMessage($seconds))]);
            } else {
                return $this->sendLockoutResponse($request);
            }
        }

        $credentials = $this->getCredentials($request);

        if (Auth::guard($this->getGuard())->attempt($credentials, $request->has('remember'))) {
            if ($throttles) {
                $this->clearLoginAttempts($request);
            }

            if (method_exists($this, 'authenticated')) {
                return $this->authenticated($request, Auth::guard($this->getGuard())->user());
            }

            if ($request->ajax()) {

                return response()->json(['data' => array(
                    'success' => true,
                    'message' => 'Authorize success',
                    'user' => Auth::user()
                )]);
            } else {
                return redirect()->intended($this->redirectPath());
            }
        }

        if ($throttles && !$lockedOut) {
            $this->incrementLoginAttempts($request);
        }

        if ($request->ajax()) {
            return response()->json(['data' => array('message' => $this->getFailedLoginMessage())]);
        } else {
            return $this->sendFailedLoginResponse($request);
        }
    }

    public function postRegister(Request $request)
    {
        return $this->register($request);
    }

    public function register(Request $request)
    {
        $validator = $this->validator($request->all());

        if ($validator->fails()) {
            return redirect()->back()->withErrors($validator, 'register');
        }

        Auth::guard($this->getGuard())->login($this->create($request->all()));

        return redirect($this->redirectPath());
    }
}
