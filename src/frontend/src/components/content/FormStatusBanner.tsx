import { CheckCircle2, XCircle } from 'lucide-react';

interface FormStatusBannerProps {
  status: 'success' | 'error';
  message: string;
}

export default function FormStatusBanner({ status, message }: FormStatusBannerProps) {
  const isSuccess = status === 'success';
  
  return (
    <div
      className={`rounded-lg p-4 flex items-start gap-3 ${
        isSuccess
          ? 'bg-green-50 border border-green-200 text-green-800'
          : 'bg-red-50 border border-red-200 text-red-800'
      }`}
    >
      {isSuccess ? (
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      )}
      <p className="text-sm leading-relaxed">{message}</p>
    </div>
  );
}
