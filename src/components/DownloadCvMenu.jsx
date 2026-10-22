import { useEffect, useId, useRef, useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';
import { cvDocuments } from '../data/content';

const DownloadCvMenu = ({
  variant = 'secondary',
  align = 'left',
  fullWidth = false,
  className = '',
}) => {
  const [open, setOpen] = useState(false);
  const rootRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!rootRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener('mousedown', onPointerDown);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('mousedown', onPointerDown);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const firstItem = menuRef.current?.querySelector('[role="menuitem"]');
    firstItem?.focus();
  }, [open]);

  const onMenuKeyDown = (event) => {
    const items = Array.from(
      menuRef.current?.querySelectorAll('[role="menuitem"]') ?? []
    );
    const current = items.indexOf(document.activeElement);

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      items[(current + 1) % items.length]?.focus();
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault();
      items[(current - 1 + items.length) % items.length]?.focus();
    }

    if (event.key === 'Home') {
      event.preventDefault();
      items[0]?.focus();
    }

    if (event.key === 'End') {
      event.preventDefault();
      items[items.length - 1]?.focus();
    }

    if (event.key === 'Tab') {
      setOpen(false);
    }
  };

  const buttonClass =
    variant === 'primary'
      ? 'btn-primary py-2.5 text-xs'
      : 'btn-secondary';

  return (
    <div
      ref={rootRef}
      className={`relative ${fullWidth ? 'w-full' : 'inline-flex'} ${className}`}
    >
      <button
        ref={buttonRef}
        type="button"
        className={`${buttonClass} ${fullWidth ? 'w-full' : ''}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        Download CV
        <HiChevronDown
          aria-hidden="true"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          ref={menuRef}
          id={menuId}
          role="menu"
          aria-label="Choose a CV"
          onKeyDown={onMenuKeyDown}
          className={`absolute top-full z-50 mt-2 rounded-2xl border border-line bg-white p-2 shadow-card ${
            fullWidth
              ? 'left-0 right-0'
              : `w-[min(18rem,calc(100vw-3rem))] ${
                  align === 'right'
                    ? 'left-0 md:left-auto md:right-0'
                    : 'left-0'
                }`
          }`}
        >
          {cvDocuments.map((document) => {
            const available = Boolean(document.href);

            if (available) {
              return (
                <a
                  key={document.id}
                  role="menuitem"
                  href={document.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-3 text-left transition-colors hover:bg-canvas focus:bg-canvas"
                  onClick={() => setOpen(false)}
                >
                  <span className="block text-sm font-medium text-ink">
                    {document.label}
                  </span>
                  <span className="mt-1 block text-xs text-muted">
                    {document.detail}
                  </span>
                </a>
              );
            }

            return (
              <button
                key={document.id}
                type="button"
                role="menuitem"
                aria-disabled="true"
                className="block w-full cursor-not-allowed rounded-xl px-3 py-3 text-left opacity-60"
                onClick={(event) => event.preventDefault()}
              >
                <span className="block text-sm font-medium text-ink">
                  {document.label}
                </span>
                <span className="mt-1 block text-xs text-muted">
                  Link not added yet
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DownloadCvMenu;
