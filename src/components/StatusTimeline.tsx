import React from 'react';
import { ComplaintStatus, TimelineEvent } from '../data/demoComplaints';
import { useLanguage } from '../context/LanguageContext';
import { 
  CheckCircle2, 
  Clock, 
  AlertCircle, 
  UserCheck, 
  Scale, 
  CheckCheck, 
  Archive,
  Calendar
} from 'lucide-react';

interface StatusTimelineProps {
  currentStatus: ComplaintStatus;
  timelineEvents: TimelineEvent[];
}

const ALL_STATUSES: { key: ComplaintStatus; labelHi: string; labelEn: string; icon: React.FC<{ className?: string }> }[] = [
  { key: 'Submitted', labelHi: '1. दर्ज किया गया', labelEn: '1. Submitted', icon: Clock },
  { key: 'Under Review', labelHi: '2. समीक्षाधीन', labelEn: '2. Under Review', icon: Clock },
  { key: 'Additional Information Required', labelHi: '3. अतिरिक्त जानकारी अपेक्षित', labelEn: '3. Info Required', icon: AlertCircle },
  { key: 'Assigned to Team', labelHi: '4. टीम को आवंटित', labelEn: '4. Assigned to Team', icon: UserCheck },
  { key: 'Assistance Under Consideration', labelHi: '5. सहायता विचाराधीन', labelEn: '5. Consideration', icon: Scale },
  { key: 'Resolved', labelHi: '6. निस्तारित', labelEn: '6. Resolved', icon: CheckCheck },
  { key: 'Closed', labelHi: '7. समाप्त / बंद', labelEn: '7. Closed', icon: Archive },
];

export const StatusTimeline: React.FC<StatusTimelineProps> = ({ currentStatus, timelineEvents }) => {
  const { language } = useLanguage();

  const getCurrentStatusIndex = () => {
    const idx = ALL_STATUSES.findIndex(s => s.key === currentStatus);
    return idx === -1 ? 0 : idx;
  };

  const currentIndex = getCurrentStatusIndex();

  return (
    <div className="space-y-6">
      {/* Horizontal Progress Flow for Desktop / Stacked for Mobile */}
      <div className="bg-slate-50 p-4 sm:p-5 rounded-xl border border-slate-200">
        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-4">
          {language === 'hi' ? '7-चरणीय शिकायत प्रगति चक्र' : '7-Stage Redressal Progress Cycle'}
        </span>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
          {ALL_STATUSES.map((step, idx) => {
            const isCompleted = idx < currentIndex;
            const isCurrent = idx === currentIndex;
            const isUpcoming = idx > currentIndex;
            const Icon = step.icon;

            return (
              <div
                key={step.key}
                className={`flex flex-col items-center text-center p-2.5 rounded-lg border text-xs transition-all ${
                  isCurrent
                    ? 'bg-blue-900 text-white border-blue-900 shadow-xs ring-2 ring-blue-500/30'
                    : isCompleted
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                    : 'bg-white text-slate-400 border-slate-200'
                }`}
              >
                <div className="mb-1.5">
                  {isCompleted ? (
                    <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  ) : (
                    <Icon className={`w-5 h-5 ${isCurrent ? 'text-amber-400' : 'text-slate-400'}`} />
                  )}
                </div>
                <span className="font-semibold text-[11px] leading-tight">
                  {language === 'hi' ? step.labelHi : step.labelEn}
                </span>
                {isCurrent && (
                  <span className="mt-1 text-[10px] bg-amber-400 text-slate-950 px-1.5 py-0.2 rounded font-bold">
                    {language === 'hi' ? 'वर्तमान स्थिति' : 'Current'}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Detailed Chronological History Log */}
      <div>
        <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-3 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-blue-900" />
          <span>{language === 'hi' ? 'शिकायत कार्यवाही इतिहास' : 'Detailed Action History'}</span>
        </h4>

        <div className="space-y-3 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-slate-200 pl-8">
          {timelineEvents.map((evt, idx) => (
            <div key={idx} className="relative bg-white p-3.5 rounded-lg border border-slate-200 shadow-xs">
              {/* Timeline marker */}
              <div className="absolute -left-[27px] top-4 w-3.5 h-3.5 rounded-full bg-blue-900 ring-4 ring-white border-2 border-amber-400"></div>

              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <span className="font-bold text-slate-900 text-xs sm:text-sm">
                  {evt.status}
                </span>
                <span className="text-[11px] font-mono text-slate-500">
                  {evt.date}
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                {evt.note}
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 text-[11px] text-slate-500 flex items-center justify-between">
                <span>
                  {language === 'hi' ? 'द्वारा दर्ज:' : 'Recorded by:'} <strong className="text-slate-700">{evt.by}</strong>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
