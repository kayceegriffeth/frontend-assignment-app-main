function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold text-red-600">404</h1>
      <p className="text-lg mt-2">Oops! Page not found.</p>
      <a href="/" className="mt-4 text-blue-500 underline">
        Go back home
      </a>
    </div>
  );
}

export default NotFound;