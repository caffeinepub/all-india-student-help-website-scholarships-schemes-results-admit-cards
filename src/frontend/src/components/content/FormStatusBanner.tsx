import { CheckCircle2, XCircle } from 'lucide-react';

interface FormStatusBannerProps {
  type: 'success' | 'error';
  message: string;
}

export default function FormStatusBanner({ type, message }: FormStatusBannerProps) {
  const isSuccess = type === 'success';
  
  return (
    <div
      className={`flex items-start gap-3 p-4 rounded-lg border ${
        isSuccess
          ? 'bg-chart-2/10 border-chart-2/20 text-chart-2'
          : 'bg-destructive/10 border-destructive/20 text-destructive'
      }`}
      role="alert"
    >
      {isSuccess ? (
        <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
      ) : (
        <XCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
      )}
      <p className="text-sm font-medium">{message}</p>
    </div>
  );
}
